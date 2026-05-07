import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al-Kitab Education System | Education for Every Child",
  description:
    "Al-Kitab Education System under Helpline Welfare Trust. Free education for underprivileged children. Rana Town, Shahdara, Lahore & adopted schools across Pakistan.",
  keywords: ["Al-Kitab Education System", "education Pakistan", "Helpline Welfare Trust", "free education", "Lahore schools"],
  openGraph: {
    title: "Al-Kitab Education System",
    description: "Education for every child. Free education and adopted schools across Pakistan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
