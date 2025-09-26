import { Box } from "@mui/material";
import createDOMPurify from "dompurify";
const DOMPurify = createDOMPurify(window);

const TestSingleCard = ({ item }) => {
  return (
    <div>
      <>
        {/* ... rest of your existing component ... */}

        <div>
          <Box
            sx={{
              "& p": { marginBottom: 3 }, // Add margin to paragraphs
              "& h2": { marginTop: 4, marginBottom: 2 }, // Style headings
              "& ul, & ol": { marginY: 2 }, // Lists
              "& iframe": { marginY: 3 }, // YouTube iframes
              "& img": { margin: 2 }, // Images
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.text, {
                ADD_TAGS: ["iframe"],
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
        </div>
      </>
    </div>
  );
};

export default TestSingleCard;
