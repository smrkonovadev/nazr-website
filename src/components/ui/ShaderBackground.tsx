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

  // Forward mouse events from the hero section to the shader canvas
  // so ChromaFlow can track cursor movement even though canvas is behind content
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const section = container.closest('section');
    if (!section) return;

    // Wait briefly for the Shader to mount its canvas
    const timer = setTimeout(() => {
      const canvas = container.querySelector('canvas');
      if (!canvas) return;

      const forwardEvent = (type: string) => (e: MouseEvent) => {
        const syntheticEvent = new MouseEvent(type, {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: true,
          cancelable: true,
        });
        canvas.dispatchEvent(syntheticEvent);
      };

      const handleMouseMove = forwardEvent('mousemove');
      const handleMouseEnter = forwardEvent('mouseenter');
      const handleMouseLeave = forwardEvent('mouseleave');

      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);

      // Store references for cleanup
      (container as any)._cleanup = () => {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, 500);

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
          baseColor="#ffffff00"
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
          colorA="#F6E9E3"
          colorB="#FF0E97"
          pattern="blueNoise"
          pixelSize={3}
          threshold={{
            type: "map",
            source: "idmostv5d9xi2rmvn45",
            channel: "alpha",
            inputMax: 1,
            inputMin: 0,
            outputMax: 0.79,
            outputMin: 0,
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
