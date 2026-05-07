interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "wide" | "auto";
}

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  auto: "",
};

export default function ImagePlaceholder({ label = "Add image", className = "", aspectRatio = "video" }: ImagePlaceholderProps) {
  return (
    <div
      className={`img-placeholder rounded-xl ${aspectClass[aspectRatio]} ${className}`}
      role="img"
      aria-label={label}
    >
      <span>{label}</span>
    </div>
  );
}
