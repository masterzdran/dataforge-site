import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentationLayout } from "@/components/DocumentationLayout";
import { DOCS, DOCS_SLUGS } from "@/data/docs";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return DOCS_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = DOCS.find((item) => item.slug === slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/docs/${doc.slug}/` },
    openGraph: {
      title: `${doc.title} · DataForge Docs`,
      description: doc.description,
      url: `/docs/${doc.slug}/`,
    },
  };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = DOCS.find((item) => item.slug === slug);
  if (!doc) notFound();
  return <DocumentationLayout doc={doc} />;
}
