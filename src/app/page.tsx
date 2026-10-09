import { CallToAction } from "@/components/CallToAction";
import { HeroSection } from "@/components/HeroSection";
import {
  CountriesSection,
  ExamplesSection,
  FeaturesSection,
  OpenSourceSection,
  UseCasesSection,
  WhySection,
} from "@/features/home/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CountriesSection />
      <ExamplesSection />
      <WhySection />
      <UseCasesSection />
      <OpenSourceSection />
      <CallToAction />
    </>
  );
}
