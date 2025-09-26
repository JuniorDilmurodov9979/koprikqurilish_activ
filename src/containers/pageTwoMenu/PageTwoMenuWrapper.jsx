import { styled } from "styled-components";

export const PageTwoMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  gap: 20px;
  .left__page {
    padding: 30px 20px;
    border-radius: 10px;
    background-color: var(--cardbgcolor);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
    -moz-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
    box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
  }
  .rigth__page {
    padding: 30px 20px;
    border-radius: 10px;
    background-color: var(--cardbgcolor);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
    -moz-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
    box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
    ul {
      list-style: none;
      li {
        border-bottom: 1px solid var(--headertextcolor);
        padding: 6px 0;
        margin: 10px 0;
        a {
          text-decoration: none;
          color: var(--largetextcolor);
          font-size: 16px;
          line-height: 24px;
          &:hover {
            color: var(--bluetextcolor);
          }
        }
      }
      .active {
        color: var(--bluetextcolor);
      }
    }
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    .rigth__page {
      display: none;
    }
  }
`;
