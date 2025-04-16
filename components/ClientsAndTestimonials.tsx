// components/ClientsAndTestimonials.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const testimonials = [
  {
    avatar: "/avatars/alex.png",
    name: "Alex Shane",
    role: "Utilisateur AvisAI",
    review:
      "J'adore pouvoir faire correspondre les pubs aux pages d'atterrissage. C'est génial pour voir comment les marques structurent leurs entonnoirs.",
    stars: 5,
  },
  {
    avatar: "/avatars/examy.png",
    name: "Examy",
    role: "Utilisateur AvisAI",
    review:
      "Analyser une boutique en entier — trafic, publicités, thème — est incroyablement puissant. On obtient une vue d'ensemble complète.",
    stars: 5,
  },
  {
    avatar: "/avatars/fouad.png",
    name: "Fouad",
    role: "Utilisateur AvisAI",
    review:
      "Je gère plusieurs boutiques et AvisAI m'aide à trouver de nouvelles idées, valider des tendances, et rester devant la concurrence.",
    stars: 4.5,
  },
  {
    avatar: "/avatars/lisa.png",
    name: "Lisa",
    role: "Utilisateur AvisAI",
    review:
      "L'interface est très fluide, et les données sont vraiment utiles. Pas de superflu, juste l'essentiel pour bien construire.",
    stars: 5,
  },
  {
    avatar: "/avatars/stelio.png",
    name: "Stelio",
    role: "Utilisateur AvisAI",
    review:
      "AvisAI me donne tout en un seul endroit — boutiques, tendances, publicités, même des landing pages. C'est devenu mon outil quotidien.",
    stars: 4.5,
  },
];

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(full)].map((_, i) => (
        <Image key={`f-${i}`} src="/icons/star.svg" alt="étoile" width={16} height={16} />
      ))}
      {half && <Image src="/icons/star-half.svg" alt="étoile moitié" width={16} height={16} />}
      {[...Array(empty)].map((_, i) => (
        <Image key={`e-${i}`} src="/icons/star-empty.svg" alt="étoile vide" width={16} height={16} />
      ))}
    </div>
  );
}

export default function ClientsAndTestimonials() {
  return (
    <section className="py-20 px-6 bg-background text-white text-center">
      <Link
        href="/features"
        className="text-brand text-lg font-medium hover:underline inline-block mb-10"
      >
        Voir les fonctionnalités
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="border border-white/10 bg-white/5 p-6 rounded-xl text-left"
          >
            {renderStars(t.stars)}
            <p className="text-sm mb-4">{t.review}</p>
            <div className="flex items-center gap-3">
              <Image
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-base font-medium">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}