import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0;
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
