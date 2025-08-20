"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { useTranslation, Trans } from "react-i18next";
import systemColors from "@/common/constants/systemColors";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: "center",
          mt: 12,
          mb: 6,
          px: 2,
        }}
      >
        <HealthAndSafetyIcon
          sx={{
            fontSize: 80,
            color: systemColors.green[700],
            mb: 2,
          }}
        />

        <Typography variant="h2" component="h1" gutterBottom>
          {t("title")}
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: 600,
            mx: "auto",
            mb: 4,
            px: 1,
          }}
        >
          {/* Use Trans to keep HTML tags like <strong> */}
          <Trans i18nKey="welcome" />
        </Typography>

        <Link href="/dicas" passHref>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: systemColors.green[700],
              "&:hover": { bgcolor: systemColors.green[900] },
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
            }}
          >
            {t("explore_button")}
          </Button>
        </Link>
      </Box>

      <Card
        sx={{
          maxWidth: 700,
          mx: "auto",
          boxShadow: 4,
          borderRadius: 3,
          overflow: "hidden",
          mb: 8,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardMedia>
          <Image
            src="/img/postura-plana-conceito-de-deliciosa-comida-saudavel.jpg"
            alt="Healthy Food"
            width={800}
            height={500}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </CardMedia>

        <CardContent
          sx={{
            textAlign: "center",
            p: 3,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {t("card.title")}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {t("card.description")}
          </Typography>

          <Link href="/dicas" passHref>
            <Button
              variant="outlined"
              size="medium"
              sx={{
                borderColor: systemColors.green[700],
                color: systemColors.green[700],
                "&:hover": {
                  bgcolor: systemColors.green[100],
                  borderColor: systemColors.green[900],
                },
                px: 3,
                py: 1,
                fontWeight: "bold",
              }}
            >
              {t("card.button")}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
}
