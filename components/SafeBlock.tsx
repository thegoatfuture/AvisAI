"use client";

import React, { Component, ReactNode } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import ButtonDuo from "./ui/ButtonDuo";

interface SafeBlockProps {
  children: ReactNode;
  /**
   * Élément de secours personnalisé. Si fourni,
   * il sera affiché en cas d'erreur.
   */
  fallback?: ReactNode;
  /** Classes CSS supplémentaires pour personnaliser le conteneur */
  className?: string;
  /** Titre affiché dans le message d'erreur */
  title?: string;
  /** Description détaillée de l'erreur */
  description?: string;
  /** Callback optionnel lors d'une tentative de nouvelle exécution */
  onRetry?: () => void;
}

interface SafeBlockState {
  hasError: boolean;
  error?: Error | null;
}

export default class SafeBlock extends Component<SafeBlockProps, SafeBlockState> {
  state: SafeBlockState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): SafeBlockState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Erreur capturée dans SafeBlock:", error, errorInfo);
    // Ici, on pourrait envoyer l'erreur à un service de monitoring externe
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
    this.props.onRetry?.();
  };

  private renderDefaultFallback() {
    const {
      title = "Oups, une erreur est survenue.",
      description =
        "Cette section n’a pas pu se charger correctement. Vous pouvez réessayer ou contacter l’assistance.",
      className,
    } = this.props;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 border border-red-300 bg-red-50 dark:bg-red-950 dark:border-red-800 rounded-2xl text-center text-red-800 dark:text-red-300 shadow-lg max-w-xl mx-auto ${
          className ?? ""
        }`}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5" />
          <p className="text-lg font-semibold">{title}</p>
        </div>
        <p className="text-sm text-red-600 dark:text-red-400 mb-4">{description}</p>
        <ButtonDuo variant="primary" onClick={this.handleRetry}>
          Réessayer
        </ButtonDuo>
      </motion.div>
    );
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? this.renderDefaultFallback();
    }

    return this.props.children;
  }
}
