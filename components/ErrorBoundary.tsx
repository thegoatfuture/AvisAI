"use client";

import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  async componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Erreur capturée dans ErrorBoundary:", error, errorInfo);
    try {
      await fetch("/api/log-error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: String(error), errorInfo }),
      });
    } catch (loggingError) {
      console.error("Échec d'envoi du log d'erreur:", loggingError);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-100"
          data-testid="error-boundary"
        >
          <h1 className="mb-4 text-4xl font-bold">Une erreur est survenue</h1>
          <p className="mb-6 text-sm max-w-md">
            {this.state.error?.message ||
              "Une erreur inattendue est survenue. Veuillez réessayer plus tard."}
          </p>
          <button
            onClick={this.handleReload}
            className="px-4 py-2 text-white transition-colors bg-red-500 rounded hover:bg-red-600"
          >
            Recharger la page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
