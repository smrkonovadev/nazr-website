"use client";

import { useEffect } from "react";

export function GlobalZoom() {
  useEffect(() => {
    const handleResize = () => {
      // The user wants the layout to match the proportions of a MacBook Air (typically 1440px wide).
      // We will only scale up if the screen is exceptionally wide (e.g., Ultra-Wide or 4K Desktop monitors).
      // A threshold of 1600px ensures we don't mess with normal laptop scaling.
      if (window.innerWidth > 1600) {
        // Calculate the zoom factor required to maintain the ~1440px Mac Air proportions
        const zoomLevel = window.innerWidth / 1440;
        document.body.style.zoom = zoomLevel.toString();
      } else {
        document.body.style.zoom = "1";
      }
    };

    // Apply on initial load
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return null;
}
