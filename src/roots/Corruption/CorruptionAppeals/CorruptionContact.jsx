import React from "react";
import { Box, Typography, Card, CardContent, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTranslation } from "react-i18next";

export const CorruptionContact = () => {
  const { t } = useTranslation();
  return (
    <Card
      sx={{
        maxWidth: 500,
        display: "flex",
        alignSelf: "flex-start",
        alignItems: "center",
        background: "linear-gradient(to right, #fdfbfb, #ebedee)",
        borderRadius: 3,
        marginLeft: { xs: 0, sm: 2, md: 8 },
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        p: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1976d2",
          color: "#fff",
          borderRadius: "50%",
          p: 1.5,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mr: 2,
        }}
      >
        <PhoneIcon fontSize="medium" />
      </Box>
      <CardContent sx={{ p: 0, pb: 0, "&:last-child": { pb: 0 } }}>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 600,
            color: "#f39c12", // orange-like highlight
            mb: 0.5,
          }}
        >
          {t("menus.menu6.network.title")}
        </Typography>
        <Box display="flex" gap={1}>
          <Typography fontWeight={500}>
            {t("menus.menu6.network.tel")} :
          </Typography>
          <Link
            href="tel:+998772082626"
            underline="hover"
            sx={{
              color: "#1976d2",
              fontWeight: 600,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            +998 77 208 26 26
          </Link>
        </Box>
        <Box display="flex" gap={1}>
          <Typography sx={{ opacity: 0, cursor: "default" }} fontWeight={500}>
            {t("menus.menu6.network.tel")} :
          </Typography>
          <Link
            href="tel:+998712032626"
            underline="hover"
            sx={{
              color: "#1976d2",
              fontWeight: 600,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            +998 71 203 26 26
          </Link>
          <Link
            href="tel:1033"
            underline="hover"
            sx={{
              color: "#1976d2",
              fontWeight: 600,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            (1033)
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};
