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
import systemColors from "@/common/constants/systemColors";

export default function Home() {
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
          Dicas Saúde
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
          Welcome to <strong>Dicas Saúde</strong> — a project created for my
          <strong> university extension program</strong>. Our mission is to
          share <strong>practical and reliable health tips</strong> to help
          communities live healthier and happier lives.
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
            Explore Health Tips
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
            Start Your Healthy Journey 🍃
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Learn how to live a better and healthier life through practical
            tips, balanced nutrition, and a lifestyle that works for you.
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
              See More Tips
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
}
