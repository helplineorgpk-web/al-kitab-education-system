import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Education Projects & Schools",
  path: "/education",
  description:
    "Explore Al-Kitab Education System's network of own campuses and adopted government schools across Pakistan, delivering free quality education to underprivileged children.",
});

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
