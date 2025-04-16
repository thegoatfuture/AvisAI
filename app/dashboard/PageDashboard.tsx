
import GenerateButton from "@/components/GenerateButton";
import ListeAvis from "@/components/ListeAvis";

export default function PageDashboard() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mon Dashboard</h1>
      <GenerateButton />
      <ListeAvis />
    </main>
  );
}
