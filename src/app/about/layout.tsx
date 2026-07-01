import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  path: "/about",
  description:
    "Learn about Al-Kitab Education System, a project of Helpline Welfare Trust reviving education for underprivileged children across Pakistan through its own campuses and adopted government schools.",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      {children}
    </>
  );
}
