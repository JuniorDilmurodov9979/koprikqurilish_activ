import styled from "styled-components";
import { IMG2 } from "../../assets/imags";

export const HomeWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,700;1,900&display=swap");
  .bg__image {
    height: 1080px;
    .carusel__bg {
      .mySwiper {
        width: 100%;
        height: 1080px;
        img,
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          animation: mymove 4.5s infinite ease-in alternate;
        }
        @keyframes mymove {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.3);
          }
        }
      }
    }
    .parda {
      background-color: rgba(29, 41, 94, 0.5);
      height: 100%;
      position: absolute;
      z-index: 10;
      width: 100%;
      height: 1080px;
      top: 0;
      left: 0;
      .parda-text {
        margin-top: 180px;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        h4 {
          text-transform: uppercase;
          color: #fff;
          text-align: right;
          font-size: 18px;
          line-height: 130%;
          font-weight: 700;
          font-family: "Roboto Condensed", sans-serif;
        }
        h1 {
          margin-top: 9px;
          color: #ffa800;
          text-transform: uppercase;
          text-align: right;
          font-size: 100px;
          line-height: 102%;
          letter-spacing: 0px;
          font-weight: 500;
          font-family: impact;
        }
        h5 {
          margin-top: 25px;
          color: #fff;
          text-align: right;
          font-size: 16px;
          line-height: 130%;
          font-weight: 400;
        }
      }
    }
    marquee {
      letter-spacing: 3px;
      font-family: monospace;
      color: #ffa800;
      font-size: 14px;
      line-height: 130%;
      font-weight: 500;
    }
  }
  .xizmatlarmiz {
    margin: 30px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .text {
      padding: 50px 0;
      h5 {
        width: 100%;
        max-width: 500px;
        color: var(--largetextcolor);
        font-size: 34px;
        font-weight: 500;
        line-height: 130%;
      }
      p {
        width: 100%;
        max-width: 500px;
        margin-top: 20px;
        color: var(--smalltextcolor);
        font-size: 21px;
        font-weight: 400;
        line-height: 130%;
      }
      a {
        text-decoration: none;
        display: block;
        width: max-content;
        border-radius: 8px;
        background-color: var(--bluetextcolor);
        padding: 12px 42px;
        margin-top: 33px;
        color: #202020;
        font-size: 16px;
        font-weight: 400;
        line-height: 130%;
        &:hover {
          color: #fff;
        }
      }
    }
    .images {
      position: relative;
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 60px 60px 4px 4px;
      }
      .round {
        position: absolute;
        z-index: 5;
        left: -54px;
        bottom: -77px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: var(--bluetextcolor);
      }
      .round-2 {
        position: absolute;
        z-index: 6;
        left: 75px;
        bottom: -47px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: var(--bgcolor);
      }
      .dots {
        position: absolute;
        z-index: 7;
        left: 30px;
        bottom: 42px;
      }
      .dots-2 {
        position: absolute;
        z-index: 7;
        right: 8px;
        top: 72px;
      }
    }
  }
  .biz-haqimizda {
    margin: 150px 0 60px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    padding: 0 40px;
    .card {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      justify-content: flex-start;
      .flex {
        p {
          color: var(--largetextcolor);
          font-size: 16px;
          font-weight: 500;
          line-height: 130%;
        }
        span {
          margin-top: 10px;
          display: block;
          max-width: 273px;
          color: var(--smalltextcolor);
          font-size: 14px;
          font-weight: 500;
          line-height: 130%;
        }
      }
      img {
        width: 48px;
      }
    }
  }
  .boxs-card-img {
    margin: 30px 0;
    background-image: url(${IMG2});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .boxs-card-pard {
      padding: 60px 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  .boxs-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .card {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 50px 20px;
      position: relative;
      z-index: 10;
      .border {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        backdrop-filter: blur(5px);
        border-radius: 8px;
      }
      h3,
      p {
        text-align: center;
        color: #fff;
        line-height: 130%;
        font-weight: 700;
      }
      h3 {
        font-size: 18px;
        margin: 8px 0;
      }
      p {
        font-size: 26px;
      }
      &:hover {
        .border {
          background-color: #162c3b;
          backdrop-filter: blur(0px);
        }
      }
    }
  }
  .news {
    margin-top: 60px;
    .news__card {
      margin: 15px 0 40px 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
    .more {
      margin: 0 auto;
      display: block;
      color: var(--bluetextcolor);
      border-color: var(--bluetextcolor);
      border-radius: 20px;
      padding: 5px 40px;
    }
  }

  @media (max-width: 1200px) {
    .news {
      margin-top: 40px;
      .news__card {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
      }
    }
  }
  @media (max-width: 992px) {
    .bg__image {
      height: 450px;
      .carusel__bg {
        .mySwiper {
          height: 450px;
        }
      }
      .parda {
        height: 450px;
        .parda-text {
          margin-top: 30px;
          h4 {
            font-size: 18px;
          }
          h1 {
            font-size: 52px;
          }
          h5 {
            margin-top: 15px;
            font-size: 16px;
          }
        }
      }
    }
    .xizmatlarmiz {
      margin: 0;
      grid-template-columns: 1fr;
      gap: 30px;
      .text {
        padding: 0;
        h5 {
          font-size: 28px;
        }
        p {
          margin-top: 20px;
          font-size: 18px;
        }
        a {
          padding: 10px 34px;
          margin-top: 25px;
          font-size: 16px;
        }
      }
      .images {
        .img {
          border-radius: 4px 60px 60px 4px;
        }
        .round {
          left: -24px;
          bottom: -67px;
          width: 110px;
          height: 110px;
        }
      }
    }
    .biz-haqimizda {
      margin: 70px 0 40px 0;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      padding: 0;
      .card {
        gap: 10px;
        flex-direction: column;
        align-items: center;
        .flex {
          p {
            text-align: center;
            font-size: 16px;
          }
          span {
            text-align: center;
            font-size: 14px;
          }
        }
        img {
          width: 48px;
        }
      }
    }
    .boxs-card-img {
      margin: 15px 0;
      .boxs-card-pard {
        padding: 40px 0;
      }
    }
    .boxs-card {
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      .card {
        padding: 30px 10px;
        h3 {
          font-size: 16px;
        }
        p {
          font-size: 22px;
        }
      }
    }
    .news {
      .news__card {
        margin: 15px 0 25px 0;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
      }
      .more {
        padding: 3px 25px;
      }
    }
    .ourProjects {
      margin-top: 40px;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 426px) {
    .bg__image {
      .parda {
        .parda-text {
          margin-top: 30px;
          align-items: center;
          h4 {
            text-align: center;
            font-size: 13px;
          }
          h1 {
            margin-top: 7px;
            text-align: center;
            font-size: 40px;
          }
          h5 {
            text-align: center;
            margin-top: 10px;
            font-size: 12px;
          }
        }
      }
    }
    .xizmatlarmiz {
      gap: 20px;
      .text {
        padding: 0;
        h5 {
          font-size: 22px;
        }
        p {
          margin-top: 15px;
          font-size: 16px;
        }
        a {
          padding: 10px 26px;
          margin-top: 20px;
          font-size: 14px;
        }
      }
      .images {
        .img {
          height: 220px;
        }
        .round {
          left: -4px;
          bottom: -27px;
          width: 80px;
          height: 80px;
        }
        .round-2 {
          left: 55px;
          bottom: -17px;
          width: 40px;
          height: 40px;
        }
      }
    }
    .biz-haqimizda {
      margin: 50px 0 30px 0;
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 0;
    }
    .boxs-card {
      .card {
        h3 {
          font-size: 14px;
        }
        p {
          font-size: 18px;
        }
      }
    }
    .news {
      margin-top: 30px;
      .news__card {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
