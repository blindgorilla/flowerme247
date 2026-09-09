import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowerMe — Fresh flowers, 24/7 in Cyprus",
  description:
    "FlowerMe is Cyprus' first 24/7 fresh flower vending machine, launching October. Join the waitlist.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
