import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { School } from "@/data/schools";

type SchoolCoverImageProps = {
  school: School;
  /** Shown only when `school.cardImage` is missing */
  placeholderLabel: string;
};

export default function SchoolCoverImage({ school, placeholderLabel }: SchoolCoverImageProps) {
  if (school.cardImage) {
    return (
      <div className="relative aspect-video w-full bg-gray-100">
        <Image
          src={school.cardImage}
          alt={`${school.name} — ${school.location}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
    );
  }

  return <ImagePlaceholder label={placeholderLabel} aspectRatio="video" className="w-full" />;
}
