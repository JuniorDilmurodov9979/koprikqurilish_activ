import styled from "styled-components";

export const HeaderTopWrapper = styled.div`
  background: ${(props) =>
    props.color ? "#00000078" : "var(--headerbgcolor)"};
  padding: 11px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__left {
    display: flex;
    align-items: center;
    gap: 15px;
    p,
    a {
      height: 100%;
      text-decoration: none;
      font-weight: 400;
      font-size: 13px;
      line-height: 19px;
      color: ${(props) => (props.color ? "#ffffff" : "var(--headertextcolor)")};
      display: flex;
      align-items: center;
      border-right: 1px solid
        ${(props) => (props.color ? "#FFA800" : "var(--headertextcolor)")};
      padding-right: 15px;
      cursor: pointer;
      svg {
        color: ${(props) => (props.color ? "#fff" : "var(--headertextcolor)")};
        font-size: 1.2rem;
        margin-right: 5px;
      }
      &:last-child {
        border-right: 0px;
      }
    }
    .a1 {
      font-size: 12px;
    }
    .a2 {
      font-size: 15px;
    }
    .a3 {
      font-size: 18px;
    }
    .color {
      padding: 5px 10px;
      border-radius: 3px;
      background-color: var(--bgcolor);
      color: var(--largetextcolor);
    }
    .davlat-ramzi {
      display: flex;
      gap: 12px;
      img {
        cursor: pointer;
        width: 20px;
        height: 20px;
        object-fit: cover;
        object-position: center;
      }
    }
    .position__top {
      position: relative;
      .position__bottom {
        overflow: hidden;
        opacity: 0;
        max-height: 0;
        width: calc(100% - 15px);
        padding: 0;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #ffa800;
        .position__bg,
        .position__text {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;

          p {
            color: #fff;
            border: none;flex
            &:last-child {
              padding: 0;
            }
          }
        }
        .position__text {
          align-items: baseline;
        }
      }
      &:hover {
        .position__bottom {
          padding: 15px;
          opacity: 1;
          height: auto;
          max-height: 150px;
        }
      }
    }
  }
  .menu {
    display: none;
  }
  @media (max-width: 992px) {
    .header__left {
      gap: 20px;
      p,
      a {
        span {
          display: none;
        }

        svg {
          font-size: 1.2rem;
        }
        &:last-child {
          border-right: 0px;
        }
      }
      .a1 {
        font-size: 12px;
      }
      .a2 {
        font-size: 15px;
      }
      .a3 {
        font-size: 18px;
      }
      .color {
        padding: 5px 10px;
      }
      .position__top {
        .position__bottom {
          width: calc(100% - 15px);

          .position__bg,
          .position__text {
            margin-top: 10px;
          }
        }
        &:hover {
          .position__bottom {
            padding: 15px;

            max-height: 150px;
          }
        }
      }
    }
    .header__right {
      display: none;
    }
    .menu {
      display: block;
      button {
        color: ${(props) =>
          props.color ? "#ffffff" : "var(--headertextcolor)"};
      }
    }
  }
  @media (max-width: 576px) {
    .header__left {
      gap: 15px;
      p,
      a {
        svg {
          font-size: 1.08rem;
        }
      }
      .a1 {
        font-size: 8px;
      }
      .a2 {
        font-size: 11px;
      }
      .a3 {
        font-size: 15px;
      }
      .color {
        padding: 5px 10px;
      }
      .position__top {
        .position__bottom {
          width: max-content;
          p {
            display: block !important;
            img {
              display: block;
            }
            span {
              display: block !important;
            }
          }
          .position__bg,
          .position__text {
            margin-top: 10px;
          }
        }
        &:hover {
          .position__bottom {
            padding: 15px;
            max-height: 150px;
          }
        }
      }
    }
    .header__right {
      display: none;
    }
  }
`;
