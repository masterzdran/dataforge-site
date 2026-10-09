"use client";

import { ArrowForward as ArrowForwardIcon, MenuBook as MenuBookIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { DocumentationSidebar } from "@/components/DocumentationSidebar";
import { Reveal } from "@/components/Reveal";
import { DOCS } from "@/data/docs";

export function DocsLandingPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ display: "flex", gap: 4 }}>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: 260,
          flexShrink: 0,
          borderRight: "1px solid",
          borderColor: "divider",
          minHeight: "70vh",
        }}
      >
        <DocumentationSidebar />
      </Box>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { md: "none" } }}
      >
        <Box sx={{ width: 300 }} onClick={() => setDrawerOpen(false)}>
          <DocumentationSidebar />
        </Box>
      </Drawer>

      <Box sx={{ flex: 1, minWidth: 0, py: { xs: 4, md: 7 }, pb: 8 }}>
        <Box sx={{ display: { md: "none" }, mb: 2 }}>
          <Button startIcon={<MenuBookIcon />} onClick={() => setDrawerOpen(true)} size="small">
            Docs menu
          </Button>
        </Box>

        <Typography
          component="h1"
          variant="h2"
          sx={{ fontSize: { xs: "1.85rem", md: "2.5rem" }, mb: 1.5 }}
        >
          Documentation
        </Typography>
        <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: 640 }} color="text.secondary">
          Everything from installation to custom generators. Five minutes from NuGet package to your
          first hundred generated customers.
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Box
          sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" } }}
        >
          {DOCS.map((doc, index) => (
            <Reveal key={doc.slug} delay={(index % 2) * 0.06}>
              <Card
                component={Link}
                href={`/docs/${doc.slug}/`}
                sx={{
                  height: "100%",
                  display: "block",
                  textDecoration: "none",
                  color: "text.primary",
                  transition: "border-color 0.2s",
                  "&:hover": { borderColor: "primary.main" },
                }}
              >
                <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
                  <Typography variant="overline" sx={{ color: "primary.light" }}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography variant="h6" component="h2" sx={{ fontSize: "1.05rem", mb: 1 }}>
                    {doc.title}
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    {doc.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 1.5,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: "primary.light",
                    }}
                  >
                    Read more <ArrowForwardIcon sx={{ fontSize: 14 }} />
                  </Typography>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
