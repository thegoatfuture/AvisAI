import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[100] blur-sm animate-scroll-bar"
      style={{
        width: `${scrollTop}%`,
        height: "4px",
        background: "linear-gradient(270deg, #ff0033, #ff6600, #ff0033)",
        backgroundSize: "600% 600%",
      }}
    />
  );
}