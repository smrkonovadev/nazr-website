"use client";

import type { CSSProperties, ReactNode } from "react";
import styles from "./RevealMask.module.css";

type RevealMaskProps = {
  children: ReactNode;
  accent: string;
  textColor?: string;
  text?: string;
  /** Bottom-most panel has no peel edge */
  showDivider?: boolean;
};

/**
 * Clips its children from the bottom via clip-path:inset.
 * Scroll progress is applied by GSAP ScrollTrigger as --clip-bottom (0% → 100%).
 * The divider is a sibling of the clipped layer so it stays fully visible
 * on the peel edge.
 */
export function RevealMask({
  children,
  accent,
  textColor,
  text,
  showDivider = true,
}: RevealMaskProps) {
  const maskStyle = {
    ["--clip-bottom" as string]: "0%",
    ["--accent" as string]: accent,
  } as CSSProperties;

  return (
    <div
      className={styles.root}
      style={maskStyle}
      data-reveal-mask=""
    >
      <div className={styles.clipped}>
        <div className={styles.content}>{children}</div>
      </div>
      {showDivider && (
        <div 
          className={`${styles.divider} w-full flex items-center border-t border-b border-black shrink-0 px-6 md:px-12`}
          style={{
            backgroundColor: accent,
            color: textColor
          }}
          aria-hidden="true"
        >
          <div className={styles.dividerText}>
            <h2 className="font-[family-name:var(--font-bebas)] text-[28px] font-normal leading-[1.1] tracking-[-0.03em] uppercase m-0">
              {text}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
