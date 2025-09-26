import styled from "styled-components";

export const PhotoCardWrapper = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  img {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .photo__card {
    cursor: pointer;
    position: relative;
    z-index: 2;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(15, 14, 19);
    background: linear-gradient(
      0deg,
      rgba(15, 14, 19, 0.7987570028011204) 0%,
      rgba(18, 18, 27, 0.30015756302521013) 44%,
      rgba(15, 14, 19, 0.7987570028011204) 100%
    );

    .top__card {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .bottom__card {
      width: 100%;
    }
    p {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      line-height: 130%;
    }
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  @media (max-width: 992px) {
    height: 200px;
  }
  @media (max-width: 576px) {
    height: 180px;
    .photo__card {
      padding: 10px;
      p {
        font-size: 12px;
      }
    }
  }
`;
