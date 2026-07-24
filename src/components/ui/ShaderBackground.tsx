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
}

export function ShaderBackground({
  className = '',
  imageUrl = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_33nh0FG48zZa0rIUZuK7vgwPfZe/gZx9yjLKI7VJ.jpeg',
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
          baseColor="#ffffff"
          downColor="#ffffff"
          intensity={1.4}
          leftColor="#ffffff"
          momentum={10}
          radius={4}
          rightColor="#ffffff"
          upColor="#ffffff"
          visible={false}
        />
        <Dither
          colorA="#f2eab3"
          colorB="#d324d4"
          pattern="blueNoise"
          pixelSize={3}
          threshold={{
            type: "map",
            source: "idmostv5d9xi2rmvn45",
            channel: "alpha",
            inputMax: 1,
            inputMin: 0,
            outputMax: 0.79,
            outputMin: 0.1,
          }}
        >
          <ImageTexture objectFit="cover" url={imageUrl} />
          <SimplexNoise
            balance={-0.5}
            colorA="#ffffff17"
            colorB="#00000000"
          />
        </Dither>
        <Paper displacement={0.2} grainScale={0.1} roughness={0.21} />
      </Shader>
    </div>
  );
}

export default ShaderBackground;
