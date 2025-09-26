import styled from "styled-components";

export const DowlandButtonWrapper = styled.div`
  margin-top: 30px;
  button {
    text-transform: capitalize;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      p {
        font-size: 20px;
      }
      svg {
        font-size: 40px;
      }
    }
  }
  @media (max-width: 576px) {
    margin-top: 20px;
    button {
      a {
        p {
          font-size: 16px;
        }
        svg {
          font-size: 26px;
        }
      }
    }
  }
`;
