import styled from "styled-components";

export const PhotoGalleryIdWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 40px;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 992px) {
    img {
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
    img {
      height: 180px;
    }
  }
`;
export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: max-content;
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 15px;
  overflow: hidden;
  button {
    position: absolute;
    top: 30px;
    right: 20px;
    color: black;
    svg {
      font-size: 2rem;
    }
  }
  img,
  iframe {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border: 0;
  }
  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    padding: 15px 10px;
    border-radius: 10px;
    button {
      top: 5px;
      right: 5px;
      svg {
        font-size: 1.3;
      }
    }
    img,
    iframe {
      height: max-content;
    }
  }
`;
