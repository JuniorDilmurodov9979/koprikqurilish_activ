import { useEffect, useState } from "react";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { LargeText } from "../../../const/Wrapper";
import { formatUzbekDate } from "../CorruptionMonitoring/CorruptionMonitoringList";
import createDOMPurify from "dompurify";
import { CiCalendar } from "react-icons/ci";
import TestSingleCard from "./TestSingleCard";

// Create a DOMPurify instance with window (for React/browser)
const DOMPurify = createDOMPurify(window);

export const SingleCard = ({ item }) => {
  const [processedHtml, setProcessedHtml] = useState("");
  const [zoomedImg, setZoomedImg] = useState(null);

  // Decode HTML entities (if text contains &lt;iframe&gt; instead of <iframe>)
  const decodeHtmlEntities = (str) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  };

  const processHtmlContent = (html) => {
    if (!html) return "";

    // Decode HTML entities (defensive)
    let fixed = decodeHtmlEntities(decodeHtmlEntities(html));

    // Fix local image paths
    fixed = fixed.replace(
      /src="\/media\//g,
      `src="https://korrupsiya.kuprikqurilish.uz/media/`
    );

    // Unwrap <iframe> from <p> tags
    fixed = fixed.replace(/<p>\s*(<iframe.*?<\/iframe>)\s*<\/p>/gi, "$1");

    // Add zoom attributes to images
    fixed = fixed.replace(
      /<img([^>]*)>/g,
      '<img$1 data-zoomable="true" style="cursor: zoom-in;" />'
    );

    // Optional: fix iframe with no src or relative src
    fixed = fixed.replace(
      /<iframe[^>]*src=["'](?!https?:\/\/)/gi,
      '<iframe src="https://'
    );

    return fixed;
  };

  useEffect(() => {
    setProcessedHtml(processHtmlContent(item?.text));
  }, [item]);

  useEffect(() => {
    // Handle image zoom
    const handleImageClick = (e) => {
      if (e.target.getAttribute("data-zoomable") === "true") {
        setZoomedImg({
          src: e.target.src,
          alt: e.target.alt || "Zoomed image",
        });
      }
    };

    document.addEventListener("click", handleImageClick);
    return () => document.removeEventListener("click", handleImageClick);
  }, []);

  const closeZoom = () => {
    setZoomedImg(null);
  };
  console.log(item?.text);

  return (
    <>
      <Card
        elevation={6}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          boxShadow: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            p: 0,
          }}
        >
          <CardContent sx={{ flexGrow: 1, paddingY: 0, paddingRight: 2 }}>
            <LargeText style={{ marginBottom: "10px" }} color="true">
              {item?.title}
            </LargeText>

            <CardActions
              sx={{
                pl: 0,
                pb: 2,
                pt: 0,
                mt: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "13px",
                }}
                variant="caption"
                color="text.secondary"
              >
                <CiCalendar fontSize={20} />
                {formatUzbekDate(item?.created_at)}
              </Typography>
            </CardActions>

            <Box
              sx={{
                maxHeight: "100%",
                pr: 1,
                "& p": {
                  marginBottom: 2,
                },
                "& iframe": {
                  width: "100%",
                  height: "400px",
                  borderRadius: "8px",
                  marginBottom: 2,
                  maxWidth: "100%",
                },
                "& img": {
                  display: "inline-block",
                  padding: 1,
                  cursor: "zoom-in",
                  width: {
                    xs: "100%!important",
                    sm: "48%!important",
                    md: "350px!important",
                  },
                  height: {
                    xs: "auto!important",
                    sm: "150px!important",
                    md: "300px!important",
                  },
                  objectFit: "cover!important",
                  borderRadius: 4,
                  flexShrink: 0,
                  margin: "0 auto",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                },
              }}
            >
              <Typography
                variant="body2"
                component="div"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(processedHtml, {
                    ADD_TAGS: ["iframe"],
                    ALLOWED_ATTR: false,
                    ADD_ATTR: [
                      "allow",
                      "allowfullscreen",
                      "frameborder",
                      "scrolling",
                      "src",
                      "title",
                      "referrerpolicy",
                      "width",
                      "height",
                    ],
                  }),
                }}
              />
            </Box>
          </CardContent>
        </Box>
      </Card>

      {/* Zoomed Image Modal */}
      {zoomedImg && (
        <Box
          onClick={closeZoom}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <Box
            sx={{
              maxWidth: "90%",
              maxHeight: "90%",
              animation: "zoomIn 0.3s ease-out",
              "@keyframes zoomIn": {
                "0%": { transform: "scale(0.8)", opacity: 0 },
                "100%": { transform: "scale(1)", opacity: 1 },
              },
            }}
          >
            <img
              src={zoomedImg.src}
              alt={zoomedImg.alt}
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                borderRadius: "4px",
                boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              }}
            />
          </Box>
        </Box>
      )}

      <>{/* <TestSingleCard item={item}></TestSingleCard> */}</>
    </>
  );
};
