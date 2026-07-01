import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Impact",
  path: "/impact",
  description:
    "See the impact of Al-Kitab Education System and Helpline Welfare Trust: schools revived, children enrolled, and lives changed through free quality education across Pakistan.",
});

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Our Impact", path: "/impact" }]} />
      {children}
    </>
  );
}
