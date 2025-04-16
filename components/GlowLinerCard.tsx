import React, { useEffect, useRef } from "react";

export default function GlowLinerCard({ children }) {
  const glowRef = useRef(null);
  const glowLayerRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    let animationFrame;
    let colorIndex = 0;

    const colors = ["#e02424", "#f97316", "#eab308", "#8b5cf6", "#ec4899"];
    const arcSize = 3;
    const speed = 0.6;

    const animate = () => {
      angle = (angle + speed) % 360;
      const color = colors[colorIndex];
      if (glowRef.current) {
        glowRef.current.style.transform = `rotate(${angle}deg)`;
        glowRef.current.style.background = color;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* SVG or mask-based overlay */}
      <div
        ref={glowRef}
        className="absolute inset-0 z-0 rounded-3xl pointer-events-none"
        style={{
          background: `#e02424`,
          borderRadius: "1.5rem",
          maskImage: "conic-gradient(transparent 0deg, black 3deg, transparent 6deg)",
          WebkitMaskImage: "conic-gradient(transparent 0deg, black 3deg, transparent 6deg)",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          willChange: "transform",
          filter: "drop-shadow(0 0 6px #e02424) brightness(2)"
        }}
      />

      {/* Visible glowing border layer */}
      <div
        ref={glowLayerRef}
        className="absolute inset-0 rounded-3xl border-[2px] border-transparent pointer-events-none z-0"
        style={{
          borderImage: "conic-gradient(#e02424 0deg, transparent 3deg, transparent 360deg) 1",
          borderImageSlice: 1,
          borderImageOutset: 0,
          borderImageRepeat: "round",
          transform: "rotate(0deg)",
          willChange: "transform"
        }}
      />

      <div className="relative z-10 bg-[#0b0b0b] text-white rounded-3xl p-10 border border-white/10">
        {children}
      </div>
    </div>
  );
}
