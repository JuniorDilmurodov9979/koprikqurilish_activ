import styled from "styled-components";

export const PartnersWrapper = styled.div`
  .mySwiper {
    .swiper-pagination {
      display: none;
    }
  }
  p {
    text-align: center;
    margin: 30px 0;
  }
  .carusel-box {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 8px;
    img {
      height: 110px;
      width: 110px;
      object-fit: contain;
      object-position: center;
    }
    &:hover {
      border-color: var(--bluetextcolor);
    }
  }
  @media (max-width: 991px) {
    .carusel-box {
      height: 160px;
      img {
        height: 100px;
        width: 100px;
      }
    }
  }
`;
