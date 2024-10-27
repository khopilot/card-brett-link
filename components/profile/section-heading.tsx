"use client";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-gradient mb-8 pb-2 border-b border-gray-200/80">
      {children}
    </h2>
  );
}