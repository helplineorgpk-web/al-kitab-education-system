import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sponsors & Supporters",
  path: "/sponsors",
  description:
    "Meet the sponsors, donors, and partners who make free education possible at Al-Kitab Education System under Helpline Welfare Trust. Join them in supporting children in Pakistan.",
});

export default function SponsorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Sponsors", path: "/sponsors" }]} />
      {children}
    </>
  );
}
