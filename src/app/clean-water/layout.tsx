import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Clean Water",
  path: "/clean-water",
  description:
    "Helpline Welfare Trust provides clean, safe drinking water to underserved communities across Pakistan through water pumps and sustainable water solutions.",
});

export default function CleanWaterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Clean Water", path: "/clean-water" }]} />
      {children}
    </>
  );
}
