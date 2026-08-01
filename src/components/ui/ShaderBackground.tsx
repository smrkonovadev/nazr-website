"use client";

import { useRef, useEffect } from 'react';
import {
  Shader,
  ChromaFlow,
  Dither,
  ImageTexture,
  Paper,
  SimplexNoise,
} from 'shaders/react';

interface ShaderBackgroundProps {
  className?: string;
  imageUrl?: string;
  colorA?: string;
  colorB?: string;
}

export function ShaderBackground({
  className = '',
  imageUrl = '/images/image 59.svg',
  colorA = '#242424',
  colorB = '#D46FB3',
}: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Forward mouse and pointer events from the parent hero section to the canvas element
  // so ChromaFlow registers cursor movement for impression trail animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const section = container.closest('section') || container.parentElement;
    if (!section) return;

    const timer = setTimeout(() => {
      const canvas = container.querySelector('canvas');
      if (!canvas) return;

      const forwardEvent = (type: string) => (e: MouseEvent | PointerEvent) => {
        const clientX = 'clientX' in e ? e.clientX : (e as any).touches?.[0]?.clientX ?? 0;
        const clientY = 'clientY' in e ? e.clientY : (e as any).touches?.[0]?.clientY ?? 0;

        let syntheticEvent: Event;
        if (type.startsWith('pointer')) {
          syntheticEvent = new PointerEvent(type, {
            clientX,
            clientY,
            bubbles: true,
            cancelable: true,
            pointerId: (e as PointerEvent).pointerId || 1,
            pointerType: (e as PointerEvent).pointerType || 'mouse',
            isPrimary: true,
          });
        } else {
          syntheticEvent = new MouseEvent(type, {
            clientX,
            clientY,
            bubbles: true,
            cancelable: true,
          });
        }
        canvas.dispatchEvent(syntheticEvent);
      };

      const handleMouseMove = forwardEvent('mousemove');
      const handlePointerMove = forwardEvent('pointermove');
      const handleMouseEnter = forwardEvent('mouseenter');
      const handleMouseLeave = forwardEvent('mouseleave');

      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('pointermove', handlePointerMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);

      (container as any)._cleanup = () => {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('pointermove', handlePointerMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, 300);

    return () => {
      clearTimeout(timer);
      if ((container as any)._cleanup) {
        (container as any)._cleanup();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    >
      <Shader style={{ width: '100%', height: '100%' }}>
        <ChromaFlow
          id="idmostv5d9xi2rmvn45"
          baseColor="#242424"
          downColor="#242424"
          intensity={1.8}
          leftColor="#242424"
          momentum={10}
          radius={5}
          rightColor="#242424"
          upColor="#242424"
          visible={false}
        />
        <Dither
          colorA={colorA}
          colorB={colorB}
          pattern="blueNoise"
          pixelSize={1.5}
          threshold={{
            type: "map",
            source: "idmostv5d9xi2rmvn45",
            channel: "alpha",
            inputMax: 1,
            inputMin: 0,
            outputMax: 0.85,
            outputMin: 0.35,
          }}
        >
          <ImageTexture objectFit="cover" url={imageUrl} />
          <SimplexNoise
            balance={-0.5}
            colorA="#ffffff17"
            colorB="#00000000"
          />
        </Dither>
        <Paper displacement={0.15} grainScale={0.08} roughness={0.15} />
      </Shader>

      {/* Figma Dark Shadow & Smudge Overlay behind text for 100% visual match */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{
          background: `
            radial-gradient(ellipse at 30% 45%, rgba(36, 36, 36, 0.85) 0%, rgba(36, 36, 36, 0.65) 45%, transparent 80%),
            linear-gradient(to right, rgba(36, 36, 36, 0.75) 0%, rgba(36, 36, 36, 0.4) 40%, transparent 75%)
          `,
        }}
      />
    </div>
  );
}

export default ShaderBackground;
