"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function LoadingPage() {
  const [key, setKey] = useState(0);

  return (
    <div className="relative min-h-screen bg-[#161616]">
      <LoadingScreen key={key} autoHide={false} />
      
      {/* Floating replay button for testing/previewing */}
      <button
        onClick={() => setKey((k) => k + 1)}
        className="fixed bottom-6 right-6 z-[100000] bg-[#FF0E97] text-white px-4 py-2 rounded-md font-[family-name:var(--font-bebas)] text-xl tracking-wider hover:opacity-90 transition-opacity shadow-lg"
      >
        Replay Loading
      </button>
    </div>
  );
}
