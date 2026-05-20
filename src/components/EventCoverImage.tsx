import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type EventCoverImageProps = {
  name: string;
  image?: string;
};

export default function EventCoverImage({ name, image }: EventCoverImageProps) {
  if (image) {
    return (
      <div className="relative aspect-video w-full bg-gray-100">
        <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
    );
  }

  return <ImagePlaceholder label={`${name} - image placeholder`} aspectRatio="video" className="w-full" />;
}
