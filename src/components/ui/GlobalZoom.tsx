"use client";

import { useEffect } from "react";

export function GlobalZoom() {
  useEffect(() => {
    // Reset body zoom to 1 to prevent conflicts with DesktopScaler
    document.body.style.zoom = "1";
  }, []);

  return null;
}
