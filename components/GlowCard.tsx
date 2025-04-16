// components/GlowCard.jsx
import React, { useEffect, useRef } from "react";

export default function GlowCard({ children }) {
  const glowRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    let raf;
    const rotate = () => {
      angle = (angle + 1.2) % 360;
      if (glowRef.current) {
        glowRef.current.style.transform = `rotate(${angle}deg)`;
      }
      raf = requestAnimationFrame(rotate);
    };
    raf = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative rounded-2xl bg-zinc-900 overflow-hidden shadow-xl">
      <div
        ref={glowRef}
        className="absolute inset-0 z-0 rounded-2xl pointer-events-none"
        style={{
          backgroundImage:
            "conic-gradient(from 0deg at 50% 50%, transparent 91%, #f43f5e 96%, #f97316 99%, transparent 100%)",
          maskImage: "linear-gradient(#000, #000)",
          WebkitMaskImage: "linear-gradient(#000, #000)",
          filter: "drop-shadow(0 0 12px #f43f5e)",
          transformOrigin: "center",
        }}
      ></div>
      <div className="relative z-10 px-6 py-8 rounded-2xl">
        {children}
      </div>
    </div>
  );
}
