import type { Metadata } from "next";
import { CallToAction } from "@/components/CallToAction";
import { CountryCard } from "@/components/CountryCard";
import { PageHeader } from "@/components/PageHeader";
import { SectionContainer } from "@/components/SectionContainer";
import { COUNTRIES } from "@/data/countries";

export const metadata: Metadata = {
  title: "Supported Countries",
  description:
    "DataForge country providers for Portugal, Spain, France, Germany, the United Kingdom, the United States, and Brazil.",
  alternates: { canonical: "/countries/" },
};

export default function CountriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Countries"
        title="Seven localized country providers"
        description="Each provider knows local names, addresses, phone formats, postal codes, and national identifiers."
      />
      <SectionContainer>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {COUNTRIES.map((country, index) => (
            <CountryCard key={country.code} country={country} index={index} />
          ))}
        </div>
      </SectionContainer>
      <CallToAction />
    </>
  );
}
