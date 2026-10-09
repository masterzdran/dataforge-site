"use client";

import { Check as CheckIcon, ContentCopy as ContentCopyIcon } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { highlight } from "@/utils/highlight";
import type { CodeExample } from "@/types";

export function CodeBlock({
  code,
  lang,
  filename,
  chrome = false,
}: {
  code: string;
  lang: "csharp" | "bash";
  filename?: string;
  chrome?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "#0D1526",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "rgba(255, 255, 255, 0.02)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {chrome &&
            ["#EF4444", "#F59E0B", "#22C55E"].map((color) => (
              <Box
                key={color}
                sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: color }}
              />
            ))}
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontFamily: "var(--font-mono)" }}
          >
            {filename ?? lang}
          </Typography>
        </Box>
        <Tooltip title={copied ? "Copied" : "Copy code"}>
          <IconButton size="small" onClick={copy} aria-label="Copy code to clipboard">
            {copied ? (
              <CheckIcon fontSize="small" color="success" />
            ) : (
              <ContentCopyIcon fontSize="small" sx={{ color: "text.secondary" }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Box component="pre" sx={{ m: 0, p: 2.5, overflowX: "auto", bgcolor: "transparent" }}>
        <Box
          component="code"
          sx={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            color: "#E5E7EB",
            whiteSpace: "pre",
          }}
          dangerouslySetInnerHTML={{ __html: highlight(code, lang) }}
        />
      </Box>
    </Box>
  );
}

export function CodeShowcase({ example }: { example: CodeExample }) {
  return <CodeBlock code={example.code} lang={example.lang} filename={example.filename} chrome />;
}
