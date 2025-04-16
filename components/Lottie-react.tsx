"use client";

import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type LottiePlayerProps = {
  animationData: object;
  loop?: boolean;
  className?: string;
};

export default function LottiePlayer({
  animationData,
  loop = true,
  className = "w-60 h-60 mx-auto",
}: LottiePlayerProps) {
  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={loop} />
    </div>
  );
}
