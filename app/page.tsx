"use client";

import SafeBlock from "@/components/SafeBlock";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import VideoDemoSection from "@/components/VideoDemoSection";
import StatsSection from "@/components/StatsSection";
import FeatureSection1 from "@/components/FeatureSection1";
import TrendInsightSection from "@/components/TrendInsightSection";
import Section6 from "@/components/Section6";
import ClientsAndTestimonials from "@/components/ClientsAndTestimonials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <SafeBlock>
        <Hero />
      </SafeBlock>

      <SafeBlock>
        <VideoDemoSection />
      </SafeBlock>

      <SafeBlock>
        <StatsSection />
      </SafeBlock>

      <SafeBlock>
        <FeatureSection1 />
      </SafeBlock>

      <SafeBlock>
        <TrendInsightSection />
      </SafeBlock>

      <SafeBlock>
        <Section6 />
      </SafeBlock>

      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Générez des <span className="text-brand">avis clients IA</span><br />
            et des visuels crédibles en quelques clics.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 dark:text-white/70 text-lg mb-10">
            Boostez votre crédibilité. Automatisez la preuve sociale de votre marque.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="/features"
            className="bg-brand px-6 py-3 rounded-xl text-white font-semibold text-lg hover:bg-brand-dark transition"
          >
            Voir les fonctionnalités
          </a>
        </motion.div>
      </section>

      <SafeBlock>
        <ClientsAndTestimonials />
      </SafeBlock>

      <SafeBlock>
        <Newsletter />
      </SafeBlock>

      <SafeBlock>
        <FAQ />
      </SafeBlock>
    </main>
  );
}
