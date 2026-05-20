"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Full-width hero backgrounds — files live in `public/img/HEADERBG/`. */
export const HEADER_BG_SLIDES = [
  "/img/HEADERBG/02-benazir-public-school.png",
  "/img/HEADERBG/03-aerial-alkitab-campus.png",
  "/img/HEADERBG/06-university-rajanpur.png",
  "/img/HEADERBG/04-iman-maryam-school.png",
  "/img/HEADERBG/08-maryam-girls-campus.png",
] as const;

const INTERVAL_MS = 6000;

export default function HeroBackgroundSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HEADER_BG_SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {HEADER_BG_SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={i === 0}
          className={`object-cover object-center transition-opacity duration-[1400ms] ease-in-out pointer-events-none ${
            i === index ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
          }`}
        />
      ))}
    </div>
  );
}
