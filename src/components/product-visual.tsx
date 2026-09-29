interface ProductVisualProps {
  name: string;
  accent: "blue" | "teal" | "amber" | "coral";
  image?: string;
  className?: string;
}

export function ProductVisual({ name, accent, image, className = "" }: ProductVisualProps) {
  if (image) {
    return (
      <div className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-secondary/30 p-4 ${className}`}>
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  const accentStyles = {
    blue: "from-blue-500/10 to-indigo-500/10 text-blue-600",
    teal: "from-teal-500/10 to-emerald-500/10 text-teal-600",
    amber: "from-amber-500/10 to-orange-500/10 text-amber-600",
    coral: "from-rose-500/10 to-pink-500/10 text-rose-600",
  };

  return (
    <div className={`relative flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br ${accentStyles[accent]} p-6 text-center ${className}`}>
      <span className="font-semibold tracking-wide">{name}</span>
    </div>
  );
}
