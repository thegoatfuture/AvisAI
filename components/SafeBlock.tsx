// src/components/SafeBlock.jsx
import React from "react";

export default class SafeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Erreur capturée dans SafeBlock:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-800 rounded shadow">
          Une erreur est survenue dans cette section.
        </div>
      );
    }

    return this.props.children;
  }
}