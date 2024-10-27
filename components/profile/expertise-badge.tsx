"use client";

export function ExpertiseBadge({ text }: { text: string }) {
  return (
    <span className="
      px-6 py-3
      bg-white/80 
      text-gray-900
      rounded-2xl
      text-sm
      font-medium
      tracking-wide
      shadow-sm
      border border-gray-200/50
      backdrop-blur-sm
      transition-all duration-300
      hover:scale-[1.02]
      hover:bg-white
      hover:border-gray-300
      hover:shadow-md
      group
      relative
      overflow-hidden
    ">
      <span className="relative z-10">{text}</span>
      <div className="
        absolute 
        inset-0 
        bg-gradient-to-r 
        from-gray-50/50 
        to-white/50
        opacity-0
        group-hover:opacity-100
        transition-opacity 
        duration-300
      " />
    </span>
  );
}