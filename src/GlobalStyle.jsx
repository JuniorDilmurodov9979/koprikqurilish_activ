import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap');


@font-face {
  font-family: impact;
  src: url("./assets/font/impact.ttf") format("ttf");
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    transition: all 0.3s linear;
  }
  .container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.text {
  color: var(--largetextcolor);
  margin-top: 20px;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
`;

export const CSSVariables = styled.div`
  --largetextcolor: ${(props) => (props.color ? "#202020" : "#fff")};
  --smalltextcolor: ${(props) => (props.color ? "#343434" : "#fff")};
  --headertextcolor: ${(props) => (props.color ? "#343434" : "#fff")};
  --bluetextcolor: ${(props) => (props.color ? "#FFA800" : "#ffffff")};
  --bluetextcolorrevers: ${(props) => (props.color ? "#ffffff" : "#FFA800")};
  --cardbgcolor: ${(props) => (props.color ? "#fff" : "#343434")};
  --bgcolor: ${(props) => (props.color ? "#F9FAFC" : "#000")};
  --headerbgcolor: ${(props) => (props.color ? "#fff" : "#000")};
`;
// export const CSSVariables = styled.div`
//   --largetextcolor: ${(props) => (props.color ? "#202020" : "#fff")};
//   --smalltextcolor: ${(props) => (props.color ? "#343434" : "#fff")};
//   --headertextcolor: ${(props) => (props.color ? "#343434" : "#fff")};
//   --bluetextcolor: ${(props) => (props.color ? "#1976D2" : "#ffffff")};
//   --bluetextcolorrevers: ${(props) => (props.color ? "#ffffff" : "#1976D2")};
//   --cardbgcolor: ${(props) => (props.color ? "#fff" : "#343434")};
//   --bgcolor: ${(props) => (props.color ? "#F9FAFC" : "#000")};
//   --headerbgcolor: ${(props) => (props.color ? "#fff" : "#000")};
// `;

export const BgColor = styled.div`
  filter: grayscale(${(props) => (props.faceColor ? "0%" : "100%")});
  zoom: ${(props) => props.zoom};
`;
