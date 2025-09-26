import styled from "styled-components";
import { FOOTER } from "../../assets/imags";

export const FooterWrapper = styled.div`
  background-image: url(${FOOTER});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .face__color {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .footer__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    padding: 60px 0;
    .footer__box {
      h6 {
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
        color: #ffffff;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: #ffffff;
        margin-bottom: 45px;
      }
      a {
        margin-top: 20px;
        display: block;
        width: max-content;
        text-decoration: none;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #ffffff;
        b {
          color: #ffa800;
          /* color: #39a3e9; */
        }
      }
      .tel {
        display: flex;
        align-items: flex-start;
        span {
          margin-left: 15px;
        }
        a {
          margin-top: 4px;
          line-height: 16px;
        }
      }
    }
    .menu {
      a {
        position: relative;
        &::before {
          position: absolute;
          content: "";
          left: 0;
          bottom: 0;
          width: 0%;
          height: 2px;
          /* background-color: #008dea; */
          background-color: #ffa800;
          color: #ffa800;
          z-index: 1;
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          color: #ffa800;
          &::before {
            width: 100%;
          }
        }
      }
    }
  }
  .footer__bottom {
    padding: 10px 0;
    background-color: #222222;
    .bottom__flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sotsial__network {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 30px;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        background-color: transparent;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        svg {
          font-size: 1.8rem;
        }
        &:hover {
          background-color: #ffffff;
          color: #ffa800;
          &:nth-child(odd) {
            color: #e42323;
          }
        }
      }
    }
    .uct_team {
      img {
        width: 120px;
        object-fit: contain;
        object-position: center;
      }
    }
  }
  @media (max-width: 992px) {
    .footer__content {
      grid-template-columns: 1fr;
      .footer__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        h6 {
          text-align: center;
        }
      }
      .menu {
        display: none;
      }
    }
  }
  @media (max-width: 576px) {
    .footer__content {
      padding: 40px 0;
      .footer__box {
        h6 {
          font-size: 20px;
          line-height: 22px;
        }
        p {
          font-size: 14px;
          line-height: 16px;
          margin-bottom: 45px;
        }
        a {
          text-align: center;
          width: 100%;
          word-wrap: break-word;
        }
        .tel {
          justify-content: center;
          span {
            margin-left: 15px;
          }
        }
      }
      .menu {
        display: none;
      }
    }
    .footer__bottom {
      padding: 10px 0;
      .sotsial__network {
        justify-content: center;
        gap: 10px;
        a {
          width: 36px;
          height: 36px;
          svg {
            font-size: 1.5rem;
          }
        }
      }
      .uct_team {
        img {
          width: 80px;
          object-fit: contain;
          object-position: center;
        }
      }
    }
  }
`;
