import type { Metadata } from "next";
import { CallToAction } from "@/components/CallToAction";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHeader } from "@/components/PageHeader";
import { SectionContainer } from "@/components/SectionContainer";
import { FEATURES } from "@/data/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Country-aware generation, deterministic seeds, custom generators, and high-performance synthetic data for .NET.",
  alternates: { canonical: "/features/" },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Built for professional data generation"
        description="Every feature exists to remove a real pain: brittle fixtures, unrealistic locales, and nondeterministic tests."
      />
      <SectionContainer>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </SectionContainer>
      <CallToAction />
    </>
  );
}
