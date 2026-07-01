import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { siteConfig } from "@/lib/seo";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoBase64 = readFileSync(join(process.cwd(), "public", "ALKitabLogoEnglish.png")).toString("base64");
const logoSrc = `data:image/png;base64,${logoBase64}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 90px",
          background: "linear-gradient(135deg, #064e3b 0%, #0f766e 55%, #115e59 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt={siteConfig.name} width={360} height={360} />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#fcd34d",
              fontWeight: 600,
            }}
          >
            A project of {siteConfig.parentName}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              lineHeight: 1.05,
              fontWeight: 800,
              color: "#ffffff",
              marginTop: 16,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 700,
              color: "#fcd34d",
              marginTop: 20,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#d1fae5",
              marginTop: 24,
            }}
          >
            Free quality education for children across Pakistan
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
