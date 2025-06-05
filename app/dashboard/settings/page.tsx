"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SettingsDashboardPage() {
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [publicProfile, setPublicProfile] = useState(true);

  return (
    <main className="p-6 space-y-6 max-w-xl">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold"
      >
        Paramètres
      </motion.h1>
      <form className="space-y-4">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            className="h-4 w-4"
          />
          <span>Recevoir les notifications</span>
        </label>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            className="h-4 w-4"
          />
          <span>S'inscrire à la newsletter</span>
        </label>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={publicProfile}
            onChange={(e) => setPublicProfile(e.target.checked)}
            className="h-4 w-4"
          />
          <span>Profil public</span>
        </label>
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded"
        >
          Enregistrer
        </button>
      </form>
    </main>
  );
}
