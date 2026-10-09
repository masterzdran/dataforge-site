import type { Metadata } from "next";
import { DocsLandingPage } from "@/features/docs/DocsLandingPage";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "DataForger documentation: installation, basic usage, country providers, entity generators, deterministic seeding, and API reference.",
  alternates: { canonical: "/docs/" },
};

export default function Page() {
  return <DocsLandingPage />;
}
