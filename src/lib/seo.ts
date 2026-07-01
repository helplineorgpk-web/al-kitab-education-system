import type { Metadata } from "next";

/**
 * Central site configuration used across metadata, sitemap, robots,
 * structured data (JSON-LD), Open Graph and Twitter cards.
 *
 * IMPORTANT: update `url` to your real production domain (or set the
 * NEXT_PUBLIC_SITE_URL environment variable) so canonical URLs,
 * sitemap entries and social share links resolve correctly.
 */
export const siteConfig = {
  name: "Al-Kitab Education System",
  shortName: "Al-Kitab",
  legalName: "Al-Kitab Education System (Helpline Welfare Trust)",
  parentName: "Helpline Welfare Trust",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alkitabeducationsystem.org").replace(/\/$/, ""),
  locale: "en_US",
  description:
    "Al-Kitab Education System, a project of Helpline Welfare Trust, provides free quality education to underprivileged children in Pakistan through its own campuses and adopted government schools.",
  tagline: "Education for Every Child",
  logo: "/ALKitabLogoEnglish.png",
  ogImage: "/ALKitabLogoEnglish.png",
  keywords: [
    "Al-Kitab Education System",
    "Al Kitab school",
    "Helpline Welfare Trust",
    "free education Pakistan",
    "education for underprivileged children",
    "adopted government schools Pakistan",
    "charity schools Lahore",
    "NGO education Pakistan",
    "Rana Town Shahdara Lahore school",
    "donate education Pakistan",
    "sponsor a child Pakistan",
  ],
  address: {
    street: "Rana Town, Shahdara",
    city: "Lahore",
    region: "Punjab",
    country: "PK",
  },
  contact: {
    email: "info@alkitabeducationsystem.org",
    phone: "+92-000-0000000",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
} as const;

/** Absolute URL builder for canonical + Open Graph links. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

interface PageMetaInput {
  title: string;
  description?: string;
  /** Route path, e.g. "/about". Used for the canonical URL. */
  path?: string;
  keywords?: string[];
  /**
   * Optional custom share image. When omitted, the site-wide branded
   * Open Graph card (src/app/opengraph-image.tsx) is used automatically.
   */
  image?: string;
  /** Set true for pages that should not be indexed (e.g. admin). */
  noindex?: boolean;
}

/**
 * Builds consistent, professional per-page metadata (title, description,
 * canonical, Open Graph, Twitter). Use inside route `layout.tsx` files or
 * `generateMetadata` functions.
 */
export function pageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords,
  image,
  noindex = false,
}: PageMetaInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogImages = image ? [{ url: absoluteUrl(image), alt: siteConfig.name }] : undefined;

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: canonical,
      title,
      description,
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [absoluteUrl(image)] } : {}),
    },
  };
}
