
"use client";
import { useState } from "react";

export default function GenerateButton() {
  const [loading, setLoading] = useState(false);
  const [avis, setAvis] = useState<any>(null);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await fetch("/api/generate", { method: "POST" });

    if (res.ok) {
      const data = await res.json();
      setAvis(data);
    } else {
      alert("Erreur lors de la génération.");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 border rounded-xl">
      <button
        onClick={handleGenerate}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        disabled={loading}
      >
        {loading ? "Génération..." : "🎨 Générer un avis IA"}
      </button>

      {avis && (
        <div className="mt-4">
          <p className="text-lg">{avis.content}</p>
          {avis.imageUrl && <img src={avis.imageUrl} alt="Avis IA" className="mt-2 rounded" />}
        </div>
      )}
    </div>
  );
}
