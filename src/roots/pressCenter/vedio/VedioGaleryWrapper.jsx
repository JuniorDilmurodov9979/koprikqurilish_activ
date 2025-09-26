import styled from "styled-components";

export const VedioGaleryWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 40px;
  .card__video {
    overflow: hidden;
    border-radius: 5px;
    position: relative;
    height: 250px;
    cursor: pointer;
    .card__text {
      left: 50%;
      top: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      position: absolute;
      z-index: 2;
      color: #ffffff;
    }
    .card__icon {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 2.5rem;
        color: #fff;
        opacity: 0;
      }
      background: linear-gradient(
        0deg,
        rgba(15, 14, 19, 0.7987570028011204) 0%,
        rgba(18, 18, 27, 0.30015756302521013) 44%,
        rgba(15, 14, 19, 0.7987570028011204) 100%
      );
    }
    &:hover {
      .card__icon {
        svg {
          opacity: 1;
        }
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 992px) {
    .card__video {
      height: 200px;
    }
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
    row-gap: 10px;
  }
  @media (max-width: 576px) {
    .card__video {
      height: 180px;
      .card__icon {
        opacity: 1;
      }
    }
  }
`;
