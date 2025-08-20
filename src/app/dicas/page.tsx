"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import systemColors from "@/common/constants/systemColors";

export default function DicasPage() {
  const { t } = useTranslation("tips");

  const tipsData = t("tips", { returnObjects: true }) as {
    title: string;
    subtitle: string;
    items: Array<{
      id: number;
      title: string;
      why: string;
      how: string;
      where: string;
      curiosities?: string[];
      benefits?: string[];
    }>;
  };

  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const icons = [
    <LocalHospitalIcon sx={{ fontSize: 40, color: systemColors.green[700] }} />,
    <FitnessCenterIcon sx={{ fontSize: 40, color: systemColors.green[700] }} />,
    <EmojiNatureIcon sx={{ fontSize: 40, color: systemColors.green[700] }} />,
    <FavoriteIcon sx={{ fontSize: 40, color: systemColors.green[700] }} />,
    <PsychologyIcon sx={{ fontSize: 40, color: systemColors.green[700] }} />,
  ];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          color={systemColors.green[700]}
          gutterBottom
        >
          {tipsData.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {tipsData.subtitle}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {tipsData.items.map((tip, index) => (
          <Card
            key={tip.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 3,
              borderRadius: 3,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
              {icons[index] || <TipsAndUpdatesIcon sx={{ fontSize: 40 }} />}
            </Box>

            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: "center", color: systemColors.green[800] }}
            >
              {tip.title}
            </Typography>

            <Collapse in={expanded === tip.id} timeout="auto" unmountOnExit>
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="body1" gutterBottom>
                  <strong>{t("tips.labels.why")}: </strong> {tip.why}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>{t("tips.labels.how")}: </strong> {tip.how}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>{t("tips.labels.where")}: </strong> {tip.where}
                </Typography>

                {tip.curiosities && tip.curiosities.length > 0 && (
                  <>
                    <Divider sx={{ my: 2 }} />
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color={systemColors.green[700]}
                      gutterBottom
                    >
                      {t("tips.labels.curiosities")}
                    </Typography>
                    <List dense>
                      {tip.curiosities.map((curiosity, i) => (
                        <ListItem key={`${tip.id}-curiosity-${i}`}>
                          <ListItemText primary={`• ${curiosity}`} />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}

                {tip.benefits && tip.benefits.length > 0 && (
                  <>
                    <Divider sx={{ my: 2 }} />
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color={systemColors.green[700]}
                      gutterBottom
                    >
                      {t("tips.labels.benefits")}
                    </Typography>
                    <List dense>
                      {tip.benefits.map((benefit, i) => (
                        <ListItem key={`${tip.id}-benefit-${i}`}>
                          <ListItemText primary={`• ${benefit}`} />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </CardContent>
            </Collapse>

            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                variant="outlined"
                onClick={() => handleToggle(tip.id)}
                sx={{
                  color: systemColors.green[700],
                  borderColor: systemColors.green[700],
                  "&:hover": {
                    backgroundColor: systemColors.green[100],
                  },
                }}
              >
                {expanded === tip.id
                  ? t("tips.buttons.showLess")
                  : t("tips.buttons.learnMore")}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
