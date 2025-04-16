import React from "react";
import { motion } from "framer-motion";
import { Rocket, Eye, Sparkles } from "lucide-react";
import GlowCard from "./GlowCard";

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-red-500" />,
    title: "Génération instantanée",
    text: "Créez des avis et visuels crédibles en quelques secondes grâce à notre IA avancée.",
  },
  {
    icon: <Eye className="w-6 h-6 text-red-500" />,
    title: "Analyse des tendances",
    text: "Suivez ce qui fonctionne en temps réel pour ajuster votre stratégie marketing.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-red-500" />,
    title: "Personnalisation facile",
    text: "Modifiez couleurs, formats et messages pour correspondre à votre identité de marque.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlowCard>
              <div className="text-center">
                <div className="flex justify-center items-center mx-auto mb-6 w-14 h-14 rounded-full bg-red-500/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.text}
                </p>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
