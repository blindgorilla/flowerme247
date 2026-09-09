import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BouquetsSection } from "@/components/BouquetsSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <BouquetsSection />
        <Suspense fallback={null}>
          <WaitlistSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
