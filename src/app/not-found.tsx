"use client";

import React from "react";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import systemColors from "@/common/constants/systemColors";
import { Routes } from "@/common/constants/routes";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "6rem",
          fontWeight: "bold",
          color: systemColors.green[700],
        }}
      >
        404
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: systemColors.green[800],
          mb: 1,
        }}
      >
        {t("notFound.title")}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          maxWidth: "500px",
          mb: 3,
        }}
      >
        {t("notFound.description")}
      </Typography>

      <Button
        variant="contained"
        component={Link}
        href={Routes.HOME}
        sx={{
          px: 3,
          py: 1,
          backgroundColor: systemColors.green[700],
          color: "#fff",
          "&:hover": {
            backgroundColor: systemColors.green[800],
          },
        }}
      >
        {t("notFound.backButton")}
      </Button>
    </Box>
  );
}
