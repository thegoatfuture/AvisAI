"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface AvisCardProps {
  name: string;
  avatar: string;
  rating: number;
  content: string;
}

export default function AvisCard({ name, avatar, rating, content }: AvisCardProps) {
  const totalStars = 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-2xl bg-white/80 dark:bg-zinc-900/80 shadow-xl p-6 border border-zinc-200 dark:border-zinc-700 backdrop-blur-md hover:scale-[1.02] transition-transform"
    >
      <div className="flex items-center mb-4">
        <Image
          src={avatar}
          alt={`Avatar de ${name}`}
          width={48}
          height={48}
          className="rounded-full object-cover border-2 border-pink-500"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
            {name}
          </h3>
          <div className="flex text-yellow-400">
            {Array.from({ length: totalStars }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4"
                fill={i < rating ? "currentColor" : "none"}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
}
