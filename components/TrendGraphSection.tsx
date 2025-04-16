import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function TrendGraphSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      strokeDashoffset: 0,
      transition: { duration: 2, ease: "easeInOut" }
    });
  }, [controls]);

  return (
    <section className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Tendances IA en temps réel</h2>
      <p className="text-white/60 mb-10 max-w-xl mx-auto">
        Analysez les tendances les plus pertinentes sur vos plateformes cibles : TikTok, Amazon, Twitter...
      </p>

      <div className="flex justify-center mb-12">
        <svg width="400" height="200" viewBox="0 0 400 200">
          <motion.path
            d="M0,150 C50,120 100,100 150,130 C200,160 250,90 300,110 C350,130 400,60 400,60"
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            animate={controls}
          />
        </svg>
      </div>

      <div className="flex justify-center gap-10 opacity-80 flex-wrap">
        {["tiktok", "amazon", "twitter", "meta", "youtube"].map(platform => (
          <img
            key={platform}
            src={`/assets/${platform}.svg`}
            alt={platform}
            className="h-10 grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}
