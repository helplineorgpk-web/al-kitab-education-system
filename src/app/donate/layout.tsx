import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Donate Now",
  path: "/donate",
  description:
    "Donate to Al-Kitab Education System (Helpline Welfare Trust) and fund free education, books, uniforms, teacher salaries, and safe classrooms for underprivileged children in Pakistan.",
});

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Donate", path: "/donate" }]} />
      {children}
    </>
  );
}
