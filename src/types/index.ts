export type CodeLang = "csharp" | "bash";

export interface CodeExample {
  id: string;
  label: string;
  filename: string;
  lang: CodeLang;
  code: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface Country {
  code: string;
  name: string;
  flag: string;
  generators: string[];
  identifiers: string[];
  sample: { label: string; value: string }[];
}

export type DocBlockType = "p" | "h2" | "code" | "list" | "note";

export interface DocBlock {
  type: DocBlockType;
  text?: string;
  items?: string[];
  code?: string;
  lang?: CodeLang;
}

export interface Doc {
  slug: string;
  title: string;
  description: string;
  blocks: DocBlock[];
}
