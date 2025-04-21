"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface SafeBlockProps {
  children: ReactNode;
}

interface SafeBlockState {
  hasError: boolean;
}

export default class SafeBlock extends React.Component<SafeBlockProps, SafeBlockState> {
  constructor(props: SafeBlockProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): SafeBlockState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Erreur capturée dans SafeBlock:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 border border-red-300 bg-red-50 dark:bg-red-950 dark:border-red-800 rounded-2xl text-center text-red-800 dark:text-red-300 shadow-lg max-w-xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5" />
            <p className="text-lg font-semibold">Oups, une erreur est survenue.</p>
          </div>
          <p className="text-sm text-red-600 dark:text-red-400">
            Cette section n’a pas pu se charger correctement. Essayez de rafraîchir la page ou contactez l’assistance.
          </p>
        </motion.div>
      );
    }

    return this.props.children;
  }
}