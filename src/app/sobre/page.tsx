"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import systemColors from "@/common/constants/systemColors";

export default function AboutPage() {
  const { t } = useTranslation("about");

  const skills = Array.isArray(t("about.skills", { returnObjects: true }))
    ? (t("about.skills", { returnObjects: true }) as string[])
    : [];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" color={systemColors.green[700]} gutterBottom>
          {t("about.title")}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {t("about.subtitle")}
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 4, textAlign: "justify" }}>
        {t("about.description")}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" fontWeight="bold" color={systemColors.green[700]} gutterBottom>
        {t("about.missionTitle")}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {t("about.missionDescription")}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" fontWeight="bold" color={systemColors.green[700]} gutterBottom>
        {t("about.skillsTitle")}
      </Typography>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index} sx={{ py: 0.5 }}>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: systemColors.green[600] }} />
            </ListItemIcon>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" fontWeight="bold" color={systemColors.green[700]} gutterBottom>
        {t("about.careerGoalTitle")}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {t("about.careerGoalDescription")}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography
        variant="body1"
        sx={{ textAlign: "center", fontWeight: "bold", mt: 4, color: systemColors.green[800] }}
      >
        {t("about.contact")}
      </Typography>
    </Container>
  );
}
