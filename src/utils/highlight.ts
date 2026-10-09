const CSHARP_RE =
  /(\/\/[^\n]*)|("(?:\\.|[^"\\])*")|\b(var|new|using|namespace|class|struct|record|enum|interface|public|private|protected|internal|static|readonly|const|void|return|foreach|for|while|if|else|switch|case|break|continue|async|await|true|false|null|string|int|long|bool|double|decimal|object|byte|char|this|base|throw|try|catch|finally|get|set|new|yield|is|as|in|out|ref|override|virtual|abstract|partial|where|select|from)\b|\b(\d[\d_.]*[fLm]?)\b|\b([A-Z][A-Za-z0-9_]*)\b/g;

const BASH_RE = /(#[^\n]*)|("(?:\\.|[^"\\])*")|\b(\d+)\b|(\b(?:dotnet|nuget|npm|git|cd|curl)\b)/g;

function esc(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function tokenize(code: string, re: RegExp, classes: string[]): string {
  let out = "";
  let last = 0;
  let match: RegExpExecArray | null;
  re.lastIndex = 0;
  while ((match = re.exec(code)) !== null) {
    out += esc(code.slice(last, match.index));
    const group = match.slice(1).findIndex((g) => g !== undefined);
    out += `<span class="tok-${classes[group] ?? "t"}">${esc(match[0])}</span>`;
    last = match.index + match[0].length;
  }
  return out + esc(code.slice(last));
}

/** Minimal token-based highlighter. ponytail: zero deps, good enough for our snippets */
export function highlight(code: string, lang: "csharp" | "bash"): string {
  return lang === "csharp"
    ? tokenize(code, CSHARP_RE, ["c", "s", "k", "n", "t"])
    : tokenize(code, BASH_RE, ["c", "s", "n", "k"]);
}
