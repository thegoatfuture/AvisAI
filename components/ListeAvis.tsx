
"use client";
import { useEffect, useState } from "react";
import AvisCard from "@/components/AvisCard";

export default function ListeAvis() {
  const [avisList, setAvisList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvis = async () => {
      const res = await fetch("/api/avis");
      if (res.ok) {
        const data = await res.json();
        setAvisList(data);
      }
      setLoading(false);
    };

    fetchAvis();
  }, []);

  const handleDelete = (id: string) => {
    setAvisList((prev) => prev.filter((a) => a.id !== id));
  };

  if (loading) {
    return <p className="text-gray-500">Chargement des avis...</p>;
  }

  if (avisList.length === 0) {
    return <p className="text-gray-500">Aucun avis généré pour l’instant.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {avisList.map((avis) => (
        <AvisCard
          key={avis.id}
          id={avis.id}
          content={avis.content}
          imageUrl={avis.imageUrl}
          createdAt={avis.createdAt}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
