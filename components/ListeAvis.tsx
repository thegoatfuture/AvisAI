"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn, formatDate } from "@/lib/utils";

// ✅ Export du type pour pouvoir l'importer ailleurs
export type Avis = {
  id: string;
  content: string;
  createdAt: string;
  user: {
    name: string | null;
    image: string | null;
  };
};

interface ListeAvisProps {
  avis: Avis[];
  className?: string;
}

function ListeAvisComponent({ avis = [], className }: ListeAvisProps) {
  if (!avis.length) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-10">
        Aucun avis généré pour le moment.
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
      {avis.map((item, index) => (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="rounded-xl p-6 bg-white dark:bg-zinc-900 shadow-lg border border-gray-100 dark:border-zinc-800 hover:shadow-xl transition-all duration-300"
        >
          <header className="flex items-center gap-4 mb-4">
            <img
              src={item.user.image || "/Avatars/avatar_1.png"}
              alt={item.user.name ? `Avatar de ${item.user.name}` : "Avatar utilisateur"}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{item.user.name || "Utilisateur anonyme"}</p>
              <time dateTime={item.createdAt} className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(item.createdAt)}
              </time>
            </div>
          </header>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {item.content}
          </p>
        </motion.article>
      ))}
    </div>
  );
}

export default React.memo(ListeAvisComponent);
