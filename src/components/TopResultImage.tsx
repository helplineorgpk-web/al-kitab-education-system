import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type TopResultImageProps = {
  name: string;
  image?: string;
};

export default function TopResultImage({ name, image }: TopResultImageProps) {
  if (image) {
    return (
      <div className="relative aspect-square w-full bg-gray-100">
        <Image
          src={image}
          alt={`${name} — Al-Kitab top performer`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    );
  }

  return (
    <ImagePlaceholder label={`${name} photo placeholder`} aspectRatio="square" className="w-full" />
  );
}
