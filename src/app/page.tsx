import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import AIFeatures from "@/components/AIFeatures";
import Mobile from "@/components/Mobile";
import Requirements from "@/components/Requirements";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <UseCases />
      <AIFeatures />
      <Mobile />
      <Requirements />
      <FAQ />
      <CTA />
    </main>
  );
}
