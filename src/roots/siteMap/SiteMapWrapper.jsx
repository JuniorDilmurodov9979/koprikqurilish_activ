import styled from "styled-components";

export const SiteMapWrapper = styled.div`
  .munus {
    padding: 30px 20px;
    border-radius: 10px;
    background-color: var(--cardbgcolor);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
    -moz-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
    box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
  }
  .card__link {
    margin-top: 30px;
    padding-left: 30px;
    p {
      position: relative;
      z-index: 2;
      color: var(--largetextcolor);
      font-size: 24px;
      line-height: 26.4px;
      &:hover {
        color: var(--bluetextcolor);
      }
    }
    ul {
      margin-top: 15px;
      position: relative;
      z-index: 2;
      padding-left: 40px;
      list-style: none;
      li {
        margin-top: 5px;
        a {
          color: var(--largetextcolor);
          font-size: 16px;
          line-height: 20px;
          text-decoration: none;
        }
        &::before {
          content: "-";
          color: var(--largetextcolor);
          font-weight: bold;
          font-size: 20px;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
          transition: all 0.3s ease-out;
        }
        &:hover {
          a {
            color: var(--bluetextcolor);
          }
          &::before {
            color: var(--bluetextcolor);
            width: 1em;
            margin-left: -1.4em;
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    .card__link {
      p {
        font-size: 18px;
        line-height: 22px;
      }
      ul {
        margin-top: 10px;
        padding-left: 15px;
        li {
          a {
            font-size: 14px;
            line-height: 18px;
          }
          &:hover {
            &::before {
              width: 1em;
              margin-left: -1.4em;
            }
          }
        }
      }
    }
  }
`;
