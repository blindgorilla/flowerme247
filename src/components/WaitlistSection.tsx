"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "@/lib/locale-context";
import { supabase } from "@/lib/supabase";
import type { Interest } from "@/lib/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The waitlist table's check constraint only allows these short values —
// map the internal option key to the value actually stored in Supabase.
const INTEREST_DB_VALUES: Record<Interest, string> = {
  one_time: "bouquet",
  subscription: "subscription",
  either: "either",
};

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistSection() {
  const { t } = useLocale();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<Interest | "">("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<"email" | "interest" | null>(null);

  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;

    async function fetchCount() {
      const { data } = await supabase.rpc("waitlist_count");
      if (active && typeof data === "number") {
        setCount(data);
      }
    }

    fetchCount();
    const interval = setInterval(fetchCount, 20_000);

    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!EMAIL_RE.test(email)) {
      setFieldError("email");
      return;
    }
    if (!interest) {
      setFieldError("interest");
      return;
    }
    setFieldError(null);
    setStatus("submitting");

    const utm_source = searchParams.get("src");
    const utm_medium = searchParams.get("medium");

    const { error } = await supabase.from("waitlist").insert({
      email,
      phone: phone || null,
      interest: INTEREST_DB_VALUES[interest],
      utm_source,
      utm_medium,
    });

    if (error) {
      setStatus("error");
      return;
    }

    setCount((c) => (c === null ? c : c + 1));
    setStatus("success");
  }

  const interestOptions: { value: Interest; label: string }[] = [
    { value: "one_time", label: t.waitlist.interestOptions.one_time },
    { value: "subscription", label: t.waitlist.interestOptions.subscription },
    { value: "either", label: t.waitlist.interestOptions.either },
  ];

  return (
    <section id="waitlist" className="mx-auto max-w-xl px-6 py-16 sm:px-8">
      <div className="rounded-3xl border border-charcoal/5 bg-cream-dark/50 p-8 shadow-sm sm:p-10">
        {status === "success" ? (
          <div className="text-center">
            <h2 className="font-display text-2xl text-charcoal">{t.thankYou.title}</h2>
            <p className="mt-3 text-charcoal/70">{t.thankYou.body}</p>
          </div>
        ) : (
          <>
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-burnt">
                {t.waitlist.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl text-charcoal">
                {t.waitlist.title}
              </h2>
              <p className="mt-2 text-sm text-charcoal/70">{t.waitlist.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <div>
                <label htmlFor="email" className="text-sm font-medium text-charcoal">
                  {t.waitlist.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.waitlist.emailPlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-2.5 text-charcoal outline-none transition-colors focus:border-burnt"
                />
                {fieldError === "email" && (
                  <p className="mt-1.5 text-sm text-burnt-dark">{t.waitlist.errorEmail}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-charcoal">
                  {t.waitlist.phoneLabel}
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.waitlist.phonePlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-2.5 text-charcoal outline-none transition-colors focus:border-burnt"
                />
              </div>

              <fieldset>
                <legend className="text-sm font-medium text-charcoal">
                  {t.waitlist.interestLabel}
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {interestOptions.map((option) => {
                    const active = interest === option.value;
                    return (
                      <label
                        key={option.value}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                          active
                            ? "border-olive bg-olive text-cream"
                            : "border-charcoal/15 bg-cream text-charcoal/70 hover:border-olive/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="interest"
                          value={option.value}
                          checked={active}
                          onChange={() => setInterest(option.value)}
                          className="sr-only"
                        />
                        {option.label}
                      </label>
                    );
                  })}
                </div>
                {fieldError === "interest" && (
                  <p className="mt-1.5 text-sm text-burnt-dark">
                    {t.waitlist.errorInterest}
                  </p>
                )}
              </fieldset>

              {status === "error" && (
                <p className="text-sm text-burnt-dark">{t.waitlist.errorGeneric}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-burnt px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-burnt-dark disabled:opacity-60"
              >
                {status === "submitting" ? t.waitlist.submitting : t.waitlist.submit}
              </button>
            </form>
          </>
        )}

        {count !== null && (
          <p className="mt-6 text-center text-sm text-olive-dark">
            {t.counter.prefix} {count} {t.counter.suffix}
          </p>
        )}
      </div>
    </section>
  );
}
