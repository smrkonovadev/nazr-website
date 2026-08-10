import React from "react";

interface HeaderBarProps {
  indexText: string;
  bg: string;
  textColor: string;
  gradientSrc?: string;
}

export function HeaderBar({ indexText, bg, textColor, gradientSrc }: HeaderBarProps) {
  return (
    <div 
      className="w-full py-2.5 px-4 md:px-12 flex items-center border-b border-black shrink-0 overflow-hidden"
      style={{ 
        backgroundColor: bg,
        backgroundImage: gradientSrc ? `url(${gradientSrc})` : undefined,
        backgroundSize: gradientSrc ? 'cover' : undefined,
        backgroundRepeat: gradientSrc ? 'no-repeat' : undefined,
        backgroundPosition: gradientSrc ? 'center center' : undefined,
        opacity: "var(--header-opacity, 1)"
      }}
    >
      <h2 
        className="font-[family-name:var(--font-bebas)] text-[24px] md:text-[28px] font-normal leading-[1.1] tracking-[-0.03em] uppercase m-0"
        style={{ color: textColor }}
      >
        {indexText}
      </h2>
    </div>
  );
}

