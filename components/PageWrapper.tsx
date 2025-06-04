"use client";

import React, { useEffect, type ComponentPropsWithoutRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface PageWrapperProps extends ComponentPropsWithoutRef<typeof motion.div> {
  children: React.ReactNode;
}

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function PageWrapper({
  children,
  className,
  ...props
}: PageWrapperProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={clsx(
          "min-h-screen bg-white dark:bg-black text-black dark:text-white",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
