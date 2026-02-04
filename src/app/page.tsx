import { Hero } from "@/components/home/hero";
import { FeatureOCR } from "@/components/home/feature-ocr";
import { FeatureSemantic } from "@/components/home/feature-semantic";
import { FeatureVideo } from "@/components/home/feature-video";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div id="features" className="scroll-mt-16">
        <FeatureOCR />
        <FeatureSemantic />
        <FeatureVideo />
      </div>
    </div>
  );
}
