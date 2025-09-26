import styled from "styled-components";

export const UzbWrapper = styled.div`
  img,
  audio {
    width: 70%;
    display: block;
    margin: 30px auto;
    max-height: 400px;
    object-fit: contain;
    object-position: center;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--smalltextcolor);
  }
  .text-center {
    text-align: center;
  }
  @media (max-width: 576px) {
    img {
      width: 90%;
      margin: 20px auto;
    }
    p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
