import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Container,
  Grid,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import striptags from "striptags";
import { Corruption_APPEALS_URL } from "../CorruptionURL";
import he from "he";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

// utils/formatDate.js
export const formatUzbekDate = (isoDateString) => {
  const date = new Date(isoDateString);
  const day = date.getDate();
  const monthIndex = date.getMonth(); // 0-based
  const year = date.getFullYear();

  const uzbekMonths = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  return `${day} ${uzbekMonths[monthIndex]}, ${year}`;
};

const CorruptionMonitoringList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const getData = async () => {
    try {
      const response = await fetch(Corruption_APPEALS_URL);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getCleanText = (html) => {
    // Step 1: Decode HTML entities (like &lt;iframe&gt;)
    const decoded = he.decode(html);

    // Step 2: Remove <iframe> tags
    const noIframe = decoded.replace(
      /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
      ""
    );

    // Step 3: Strip remaining HTML tags
    const cleanText = striptags(noIframe);

    // Step 4: Truncate to 200 characters
    const maxLength = 200;
    return cleanText.length > maxLength
      ? cleanText.slice(0, maxLength) + "..."
      : cleanText;
  };

  return (
    <Container sx={{ mt: 6, mb: 6, py: 0 }}>
      {loading ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="40vh"
        >
          <CircularProgress />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Maʼlumotlar yuklanmoqda...
          </Typography>
        </Box>
      ) : data.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="40vh"
          flexDirection="column"
        >
          <Typography variant="h6" color="text.secondary">
            Maʼlumotlar topilmadi
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {data.reverse().map((item) => (
            <Grid item xs={12} sm={6} md={6} key={item.id}>
              <Card
                elevation={6}
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    // boxShadow: 8,
                  },
                }}
              >
                {item.image ? (
                  <CardMedia
                    className="h-[250px]"
                    component="img"
                    height="250px"
                    // width={100}
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: "cover", height: 280 }}
                  />
                ) : (
                  <Box
                    height="200px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bgcolor="grey.200"
                  >
                    <Typography variant="caption" color="text.secondary">
                      Rasm mavjud emas
                    </Typography>
                  </Box>
                )}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    minWidth: 0,
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "100%",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      display: "-webkit-box",
                      WebkitLineClamp: 3, // Show max 2 lines
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      minHeight: "4em", // Ensure consistent height for 2 lines
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      maxHeight: "100px", // Reduced from 120px
                      overflow: "hidden",
                      position: "relative",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "1.5em",
                        // background:
                        //   "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))",
                      },
                    }}
                  >
                    <div>{getCleanText(item.text)}</div>
                  </Box>
                </CardContent>

                <CardActions
                  sx={{
                    px: 2,
                    pb: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1, // creates consistent spacing between all items
                  }}
                >
                  {/* Date - takes left space */}
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ flexGrow: 1 }} // pushes other items to the right
                  >
                    {formatUzbekDate(item?.created_at)}
                  </Typography>

                  {/* View count - stays grouped with button */}
                  <Box
                    sx={{
                      display: "flex",
                      // alignItems: "center",
                      gap: 0.5,
                      mr: 1.5, // small space before button
                    }}
                  >
                    <RemoveRedEyeIcon
                      fontSize="small"
                      sx={{
                        color: "text.secondary",
                        fontSize: "16px", // slightly smaller
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {item.seen_count || 0}
                    </Typography>
                  </Box>

                  {/* Button - stays on far right */}
                  <Button
                    component={Link}
                    to={`/corruption/monitoring/${item.id}`}
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "none",
                      minWidth: "90px", // gives consistent button width
                    }}
                  >
                    Batafsil
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default CorruptionMonitoringList;
