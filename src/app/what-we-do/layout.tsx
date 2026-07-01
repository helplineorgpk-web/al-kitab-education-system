import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "What We Do",
  path: "/what-we-do",
  description:
    "Explore the work of Al-Kitab Education System and Helpline Welfare Trust: free quality education, adopting and reviving government schools, and long-term support for children in Pakistan.",
});

export default function WhatWeDoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "What We Do", path: "/what-we-do" }]} />
      {children}
    </>
  );
}
