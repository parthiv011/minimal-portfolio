import React from 'react';

export const HighlightedLabel = ({ text }: { text: string }) => {
  return (
    <span className="font-machina relative inline-block font-medium">
      <span className="absolute inset-0 z-0 h-full w-full scale-[1.04] bg-neutral-100" />
      <span className="relative z-10">{text}</span>

      {/* Corner pulse dots */}
      <span className="absolute -top-px -left-1 h-1 w-1 animate-pulse rounded-full bg-neutral-300"></span>
      <span className="absolute -top-px h-1 w-1 animate-pulse rounded-full bg-neutral-300"></span>
      <span className="absolute -bottom-px -left-1 h-1 w-1 animate-pulse rounded-full bg-neutral-300"></span>
      <span className="absolute -bottom-px h-1 w-1 animate-pulse rounded-full bg-neutral-300"></span>
    </span>
  );
};
