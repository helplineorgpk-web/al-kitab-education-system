import { absoluteUrl, siteConfig } from "@/lib/seo";

/** Renders a JSON-LD structured-data script tag. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization + WebSite + site navigation structured data.
 * Helps Google understand the brand and site structure, which is a key
 * signal for generating rich results and sitelinks under the main result.
 */
export function OrganizationJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logo),
    },
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    parentOrganization: {
      "@type": "NGO",
      name: siteConfig.parentName,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: Object.values(siteConfig.social),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  const navItems: { name: string; path: string }[] = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "About", path: "/about" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Our Impact", path: "/impact" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact" },
  ];

  const siteNavigation = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} Navigation`,
    itemListElement: navItems.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };

  return <JsonLd data={[organization, website, siteNavigation]} />;
}

/** BreadcrumbList structured data for deeper pages. */
export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
  return <JsonLd data={data} />;
}
