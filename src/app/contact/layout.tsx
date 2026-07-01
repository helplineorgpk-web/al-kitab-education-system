import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  path: "/contact",
  description:
    "Get in touch with Al-Kitab Education System (Helpline Welfare Trust) in Rana Town, Shahdara, Lahore. Support free education, sponsor a child, volunteer, or partner with us.",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      {children}
    </>
  );
}
