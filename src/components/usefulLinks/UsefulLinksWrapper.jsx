import styled from "styled-components";
import { GERB } from "../../assets/imags";
import { LOGO } from "../../assets/icon";

export const UsefulLinksWrapper = styled.div`
  .boxs {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    .div {
      padding: 35px 20px;
    }
    .card__paper {
      position: relative;
      background-color: var(--cardbgcolor);
      height: -webkit-fill-available;
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
      -moz-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
      box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-image: url(${LOGO});
        background-position: 120% center;
        background-size: 50%;
        background-repeat: no-repeat;
        opacity: 0.2;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        -webkit-box-shadow: 0px 0px 8px -3px rgba(34, 60, 80, 0.1);
        -moz-box-shadow: 0px 0px 8px -3px rgba(34, 60, 80, 0.1);
        box-shadow: 0px 0px 8px -3px rgba(34, 60, 80, 0.1);
        &::before {
          opacity: 0.3;
        }
      }
      .card__in {
        height: max-content;
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
      }
    }
    .card__link {
      position: relative;
      background-color: var(--cardbgcolor);
      height: -webkit-fill-available;
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
      -moz-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
      box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.1);
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-image: url(${GERB});
        background-position: 120% center;
        background-size: 50%;
        background-repeat: no-repeat;
        opacity: 0.2;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        -webkit-box-shadow: 0px 0px 8px -3px rgba(34, 60, 80, 0.1);
        -moz-box-shadow: 0px 0px 8px -3px rgba(34, 60, 80, 0.1);
        box-shadow: 0px 0px 8px -3px rgba(34, 60, 80, 0.1);
        &::before {
          opacity: 0.3;
        }
      }
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
        padding-left: 20px;
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
  }
  @media (max-width: 992px) {
    .boxs {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
  @media (max-width: 992px) {
    .boxs {
      .div {
        padding: 35px 20px;
      }
      .card__paper {
      }
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
  }
`;
