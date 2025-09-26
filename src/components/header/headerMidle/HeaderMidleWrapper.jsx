import styled from "styled-components";

export const HeadermidleWrapper = styled.div`
  background-color: ${(props) => (props.color ? "" : "var(--headerbgcolor)")};
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .gerb {
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      height: 100px;
      object-fit: cover;
      object-position: center;
    }
    h1 {
      margin-left: 12px;
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      text-transform: uppercase;
      color: ${(props) => (props.color ? "#ffffff" : "var(--bluetextcolor)")};
      text-shadow: ${(props) =>
        props.color ? "0px 3px 5px rgba(0, 0, 0, 0.4)" : ""};
    }
  }
  .search {
    display: flex;
    align-items: center;

    a {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
      text-transform: lowercase;
    }
  }
  @media (max-width: 992px) {
    .gerb {
      img {
        height: 80px;
      }
      h1 {
        margin-left: 10px;
        font-size: 16px;
        line-height: 20px;
      }
    }
    .search {
      display: none;
    }
  }
`;
