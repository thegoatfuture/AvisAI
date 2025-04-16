
// src/components/ErrorBoundary.jsx

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center text-white bg-red-800 min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Une erreur est survenue 😢</h1>
          <p>{this.state.error?.message || "Quelque chose s'est mal passé."}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
