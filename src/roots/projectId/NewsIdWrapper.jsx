import styled from "styled-components";

export const NewsIdWrapper = styled.div`
  .swiper {
    padding: 40px 0;
    .swiper-slide {
      width: 450px;
      height: 350px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color: var(--bluetextcolor);
      font-weight: 900;
    }
  }
  .boxs {
    .time {
      margin-top: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 40px;
      p {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 7px;
        color: var(--bluetextcolor);
      }
    }
  }
  @media (max-width: 768px) {
    .swiper {
      padding: 30px 0;
      .swiper-slide {
        width: calc(100vw - 30px);
        height: 280px;
      }
      .swiper-button-next,
      .swiper-button-prev {
        display: none;
      }
      .swiper-horizontal > .swiper-pagination-bullets,
      .swiper-pagination-bullets.swiper-pagination-horizontal,
      .swiper-pagination-custom,
      .swiper-pagination-fraction {
      }
    }
    .boxs {
      .time {
        margin-top: 25px;
        gap: 30px;
        p {
          gap: 6px;
        }
      }
    }
  }
`;
