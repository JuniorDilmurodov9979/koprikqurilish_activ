import styled from "styled-components";

export const NewspaperCardWrapper = styled.div`
  max-width: 450px;
  width: 100%;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  img {
    max-width: 450px;
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
  }
  h3 {
    margin: 15px 0;
    color: var(--largetextcolor);
    font-weight: 400;
    line-height: 120%;
    font-size: 16px;
  }
  .card-time {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p,
    button {
      text-transform: capitalize;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: var(--largetextcolor);
      font-weight: 400;
      line-height: 120%;
      font-size: 14px;
      svg {
        color: var(--largetextcolor);
        margin-right: 10px;
      }
    }
  }
  &:hover {
    border-color: var(--headertextcolor);
    -webkit-box-shadow: 0px 0px 13px 1px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 13px 1px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 13px 1px rgba(34, 60, 80, 0.2);
    img {
      transform: matrix(1);
    }
  }
  @media (max-width: 1200px) {
    padding: 8px;
    img {
      height: 200px;
    }
    h3 {
      margin: 12px 0;
      font-size: 14px;
    }
    .card-time {
      p,
      button {
        font-size: 12px;
        svg {
          display: none;
        }
      }
    }
  }
  @media (max-width: 576px) {
    img {
      height: 150px;
    }
    h3 {
      margin: 8px 0;
    }
  }
`;
