"use client";

import { MenuBook as MenuBookIcon, Search as SearchIcon } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { DOCS } from "@/data/docs";

export function DocumentationSidebar({ activeSlug }: { activeSlug?: string }) {
  return (
    <Box component="nav" aria-label="Documentation navigation" sx={{ py: 3 }}>
      <TextField
        placeholder="Search docs…"
        aria-label="Search documentation"
        fullWidth
        disabled
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" sx={{ color: "text.secondary" }} />
              </InputAdornment>
            ),
          },
        }}
        sx={{ mb: 2 }}
      />
      {/* ponytail: search is a placeholder — wiring a client-side index is a later feature */}

      <Typography
        variant="overline"
        sx={{ color: "text.secondary", display: "block", px: 1, mb: 0.5 }}
      >
        Guide
      </Typography>
      <List dense disablePadding>
        {DOCS.map((doc) => {
          const active = doc.slug === activeSlug;
          return (
            <ListItemButton
              key={doc.slug}
              component={Link}
              href={`/docs/${doc.slug}/`}
              selected={active}
              sx={{
                borderRadius: 1.5,
                mx: 0.5,
                color: active ? "primary.light" : "text.secondary",
                "&.Mui-selected": {
                  bgcolor: "rgba(99, 102, 241, 0.12)",
                  "&:hover": { bgcolor: "rgba(99, 102, 241, 0.18)" },
                },
              }}
            >
              <MenuBookIcon fontSize="inherit" sx={{ mr: 1.25, fontSize: 16, opacity: 0.7 }} />
              <ListItemText primary={doc.title} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}
