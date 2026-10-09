import type { Metadata } from "next";
import { AboutPage } from "@/features/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vision, motivation, architecture, roadmap, and contribution guide for the DataForge open-source synthetic data library.",
  alternates: { canonical: "/about/" },
};

export default function Page() {
  return <AboutPage />;
}
