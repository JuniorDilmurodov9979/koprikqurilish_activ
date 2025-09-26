import styled from "styled-components";

export const HeaderBottomWrapper = styled.div`
  padding: 15px 0;
  position: relative;
  background-color: ${(props) => (props.color ? "" : "var(--headerbgcolor)")};
    .container {
        max-width: 1350px;  /* ✅ kengaytirildi */
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
    }
  &::before {
    position: absolute;
    content: "";
    height: 2px;
    background-color: ${(props) => (props.color ? "#FFA800" : "#FFA800")};
    top: 0;
    left: 50%;
    -webkit-animation: before 3s infinite ease-in-out alternate;
    -moz-animation: before 3s infinite ease-in-out alternate;
    animation: before 3s infinite ease-in-out alternate;
  }
  &::after {
    position: absolute;
    content: "";
    width: 50%;
    height: 2px;
    background-color: ${(props) => (props.color ? "#FFA800" : "#FFA800")};
    top: 0;
    right: 50%;
    -webkit-animation: before 3s infinite ease-in-out alternate;
    -moz-animation: before 3s infinite ease-in-out alternate;
    animation: before 3s infinite ease-in-out alternate;
  }
  @keyframes before {
    from {
      width: 0%;
    }
    to {
      width: 50%;
    }
  }
  .footer__menu {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .mobile__lang {
    display: none;
    .menu {
      display: block;
      button {
        color: ${(props) =>
          props.color ? "#ffffff" : "var(--headertextcolor)"};
      }
    }
  }
  .search {
    display: none;
  }
  @media (max-width: 992px) {
    .footer__menu {
      li {
        width: 100%;
      }
    }
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(${(props) => (props.menuChange ? "-100%" : "0")});
    min-height: 100vh;
    background: linear-gradient(
      112.8deg,
      rgba(207, 207, 207, 0.26) 0%,
      rgba(207, 207, 207, 0.06) 92.87%
    );
    backdrop-filter: blur(35px);
    .footer__menu {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
    }
    .mobile__lang {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .search {
      display: block;
    }
  }
`;
