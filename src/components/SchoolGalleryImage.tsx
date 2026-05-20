import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type SchoolGalleryImageProps = {
  schoolName: string;
  image?: string;
  index: number;
};

export default function SchoolGalleryImage({ schoolName, image, index }: SchoolGalleryImageProps) {
  if (image) {
    return (
      <div className="relative aspect-video w-full bg-gray-100">
        <Image
          src={image}
          alt={`${schoolName} — photo ${index}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    );
  }

  return (
    <ImagePlaceholder
      label={`${schoolName} - Image ${index}`}
      aspectRatio="video"
      className="w-full"
    />
  );
}
