import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Campaigns",
  path: "/campaigns",
  description:
    "Support Al-Kitab Education System campaigns under Helpline Welfare Trust, including school support, construction, and education drives helping underprivileged children across Pakistan.",
});

export default function CampaignsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Campaigns", path: "/campaigns" }]} />
      {children}
    </>
  );
}
