import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Presence",
  path: "/our-presence",
  description:
    "Discover where Al-Kitab Education System and Helpline Welfare Trust operate across Pakistan, from Lahore to Sindh, with a growing network of schools serving underprivileged communities.",
});

export default function OurPresenceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Our Presence", path: "/our-presence" }]} />
      {children}
    </>
  );
}
