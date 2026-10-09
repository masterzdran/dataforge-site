"use client";

import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Menu as MenuIcon,
  TableChart as TocIcon,
} from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Collapse,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link as MuiLink,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Fragment, useState, type ReactNode } from "react";
import { DocumentationSidebar } from "@/components/DocumentationSidebar";
import { CodeBlock } from "@/components/CodeShowcase";
import { Reveal } from "@/components/Reveal";
import { DOCS } from "@/data/docs";
import type { Doc, DocBlock } from "@/types";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function inline(text: string): ReactNode {
  return text.split(/(`[^`]+`)/g).map((part, index) =>
    part.length > 2 && part.startsWith("`") && part.endsWith("`") ? (
      <Box
        component="code"
        key={index}
        sx={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.85em",
          px: 0.75,
          py: 0.25,
          borderRadius: 1,
          bgcolor: "rgba(99, 102, 241, 0.12)",
          color: "primary.light",
        }}
      >
        {part.slice(1, -1)}
      </Box>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

function BlockRenderer({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <Typography
          component="h2"
          id={slugify(block.text ?? "")}
          variant="h4"
          sx={{ mt: 5, mb: 1.5, fontSize: "1.4rem", scrollMarginTop: "88px" }}
        >
          {block.text}
        </Typography>
      );
    case "code":
      return (
        <Box sx={{ my: 2.5 }}>
          <CodeBlock code={block.code ?? ""} lang={block.lang ?? "csharp"} />
        </Box>
      );
    case "list":
      return (
        <Box
          component="ul"
          sx={{ mt: 1, mb: 2, pl: 3, "& li": { mb: 1, color: "text.secondary" } }}
        >
          {block.items?.map((item) => (
            <li key={item}>{inline(item)}</li>
          ))}
        </Box>
      );
    case "note":
      return (
        <Paper
          variant="outlined"
          sx={{
            my: 3,
            p: 2,
            bgcolor: "rgba(6, 182, 212, 0.08)",
            borderColor: "rgba(6, 182, 212, 0.35)",
          }}
        >
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {inline(block.text ?? "")}
          </Typography>
        </Paper>
      );
    default:
      return (
        <Typography sx={{ my: 2, lineHeight: 1.8 }} color="text.secondary">
          {inline(block.text ?? "")}
        </Typography>
      );
  }
}

export function DocumentationLayout({ doc }: { doc: Doc }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  const headings = doc.blocks.filter((block) => block.type === "h2");
  const index = DOCS.findIndex((item) => item.slug === doc.slug);
  const prev = index > 0 ? DOCS[index - 1] : undefined;
  const next = index < DOCS.length - 1 ? DOCS[index + 1] : undefined;

  const toc = (
    <Box component="nav" aria-label="On this page">
      <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
        On this page
      </Typography>
      <Stack spacing={0.75}>
        {headings.map((heading) => (
          <MuiLink
            key={heading.text}
            href={`#${slugify(heading.text ?? "")}`}
            underline="hover"
            color="text.secondary"
            sx={{ fontSize: "0.85rem" }}
          >
            {heading.text}
          </MuiLink>
        ))}
      </Stack>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ display: "flex", gap: 4 }}>
      {/* Sidebar: static on desktop, drawer on mobile */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: 260,
          flexShrink: 0,
          borderRight: "1px solid",
          borderColor: "divider",
          minHeight: "60vh",
        }}
      >
        <DocumentationSidebar activeSlug={doc.slug} />
      </Box>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { md: "none" } }}
      >
        <Box sx={{ width: 300 }} onClick={() => setDrawerOpen(false)}>
          <DocumentationSidebar activeSlug={doc.slug} />
        </Box>
      </Drawer>

      <Box sx={{ flex: 1, minWidth: 0, py: { xs: 3, md: 5 }, pb: 8 }}>
        <Box sx={{ display: { md: "none" }, mb: 2 }}>
          <Button startIcon={<MenuIcon />} onClick={() => setDrawerOpen(true)} size="small">
            Docs menu
          </Button>
        </Box>

        <Breadcrumbs aria-label="Breadcrumb" sx={{ mb: 2 }}>
          <MuiLink component={Link} href="/" underline="hover" color="text.secondary">
            Home
          </MuiLink>
          <MuiLink component={Link} href="/docs/" underline="hover" color="text.secondary">
            Docs
          </MuiLink>
          <Typography color="text.primary">{doc.title}</Typography>
        </Breadcrumbs>

        <Reveal>
          <Typography
            component="h1"
            variant="h2"
            sx={{ fontSize: { xs: "1.85rem", md: "2.4rem" }, mb: 1 }}
          >
            {doc.title}
          </Typography>
          <Typography sx={{ mb: 1, lineHeight: 1.7 }} color="text.secondary">
            {doc.description}
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {doc.blocks.map((block, blockIndex) => (
            <BlockRenderer key={blockIndex} block={block} />
          ))}

          <Divider sx={{ my: 4 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
            {prev ? (
              <Button
                component={Link}
                href={`/docs/${prev.slug}/`}
                startIcon={<ArrowBackIcon />}
                variant="outlined"
              >
                {prev.title}
              </Button>
            ) : (
              <Box />
            )}
            {next && (
              <Button
                component={Link}
                href={`/docs/${next.slug}/`}
                endIcon={<ArrowForwardIcon />}
                variant="outlined"
              >
                {next.title}
              </Button>
            )}
          </Box>
        </Reveal>
      </Box>

      {/* Table of contents: sticky on desktop, collapsible on mobile */}
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          width: 220,
          flexShrink: 0,
          position: "sticky",
          top: 96,
          alignSelf: "flex-start",
          py: 5,
        }}
      >
        {toc}
      </Box>
      <Box sx={{ display: { lg: "none" }, position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}>
        <IconButton
          onClick={() => setTocOpen((value) => !value)}
          aria-label="Toggle table of contents"
          aria-expanded={tocOpen}
          sx={{
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: 6,
            color: "text.primary",
          }}
        >
          <TocIcon />
        </IconButton>
        <Collapse
          in={tocOpen}
          sx={{ position: "absolute", bottom: "100%", right: 0, mb: 1, width: 240 }}
        >
          <Paper sx={{ p: 2, border: "1px solid", borderColor: "divider" }}>{toc}</Paper>
        </Collapse>
      </Box>
    </Container>
  );
}
