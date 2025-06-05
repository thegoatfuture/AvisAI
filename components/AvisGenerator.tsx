"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ListeAvis, { Avis } from "./ListeAvis";
import GenerateButton from "./GenerateButton";

interface AvisGeneratorProps {
  initialAvis: Avis[];
}

export default function AvisGenerator({ initialAvis }: AvisGeneratorProps) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [avis, setAvis] = useState<Avis[]>(initialAvis);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const reader = res.body?.getReader();
      if (reader) {
        const decoder = new TextDecoder();
        let done = false;
        let text = "";
        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          const chunk = decoder.decode(value);
          text += chunk;
          setResponse(text);
        }
      } else {
        const text = await res.text();
        setResponse(text);
      }

      const avisRes = await fetch("/api/avis", { cache: "no-store" });
      if (avisRes.ok) {
        setAvis(await avisRes.json());
      }
    } catch (error) {
      console.error("Erreur génération:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Décris l'avis à générer..."
          rows={4}
          className="w-full p-4 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <GenerateButton onClick={handleGenerate} loading={loading} />
        {response && (
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-md whitespace-pre-wrap border border-zinc-200 dark:border-zinc-800"
          >
            {response}
          </motion.pre>
        )}
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">🧾 Vos derniers avis :</h2>
        <ListeAvis avis={avis} />
      </section>
    </div>
  );
}
