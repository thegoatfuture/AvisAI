
"use client";
import { useState } from "react";

interface Avis {
  id: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  onDelete: (id: string) => void;
}

export default function AvisCard({ id, content, imageUrl, createdAt, onDelete }: Avis) {
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const handleDelete = async () => {
    if (!confirm("Supprimer cet avis ?")) return;
    setLoading(true);
    const res = await fetch("/api/avis/" + id, { method: "DELETE" });
    if (res.ok) {
      onDelete(id);
    } else {
      alert("Erreur lors de la suppression.");
    }
    setLoading(false);
  };

  const handleUpdate = async () => {
    setLoading(true);
    const res = await fetch("/api/avis/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newContent, imageUrl }),
    });

    if (!res.ok) {
      alert("Erreur lors de la mise à jour.");
    } else {
      setEditMode(false);
    }
    setLoading(false);
  };

  return (
    <div className="border p-4 rounded-xl shadow-sm relative">
      {editMode ? (
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
      ) : (
        <p className="text-base mb-2">{content}</p>
      )}

      {imageUrl && <img src={imageUrl} alt="avis" className="w-full h-auto rounded mt-2" />}

      <p className="text-xs text-gray-400 mt-2">
        Créé le {new Date(createdAt).toLocaleDateString("fr-FR")}
      </p>

      <div className="absolute top-2 right-2 flex gap-2">
        {editMode ? (
          <button
            className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            onClick={handleUpdate}
            disabled={loading}
          >
            {loading ? "..." : "💾 Enregistrer"}
          </button>
        ) : (
          <button
            className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            onClick={() => setEditMode(true)}
          >
            ✏️ Modifier
          </button>
        )}

        <button
          className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? "..." : "🗑️"}
        </button>
      </div>
    </div>
  );
}
