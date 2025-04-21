"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FeatureSection1 from "@/components/FeatureSection1";
import TrendInsightSection from "@/components/TrendInsightSection";
import StatsSection from "@/components/StatsSection";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />

      <motion.main
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="bg-white dark:bg-zinc-950 text-black dark:text-white"
      >
        <Hero />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FeatureSection1 />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TrendInsightSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <StatsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FAQ />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Newsletter />
        </motion.div>

        <Footer />
      </motion.main>
    </>
  );
}