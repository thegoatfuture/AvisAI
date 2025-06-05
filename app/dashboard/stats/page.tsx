import { motion } from "framer-motion";
import StatsChart from "@/components/StatsChart";
import StatsSummary from "@/components/StatsSummary";

export default function StatsDashboardPage() {
  return (
    <main className="p-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold"
      >
        Statistiques
      </motion.h1>
      <StatsSummary />
      <StatsChart />
    </main>
  );
}
