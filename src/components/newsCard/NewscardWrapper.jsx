import styled from "styled-components";

export const NewscardWrapper = styled.div`
  width: 100%;
  background-color: var(--cardbgcolor);
  overflow: hidden;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  .new__img {
    width: 100%;
    height: 200px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .new__body {
    width: 100%;
    padding: 22px 15px;
    .new__title {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: var(--largetextcolor);
    }
    .new__text {
      margin-top: 10px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: var(--smalltextcolor);
    }
    .time {
      margin-top: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--smalltextcolor);
      p {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        font-weight: 400;
        font-size: 12px;
        line-height: 17px;

        svg {
          margin-right: 5px;
        }
      }
    }
  }
  a {
    display: block;
    text-decoration: none;
    height: 100%;
  }
  button {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
  }
  @media (max-width: 576px) {
    .new__body {
      padding: 16px 12px;
      .new__title {
        font-size: 14px;
        line-height: 16px;
      }
      .new__text {
        margin-top: 6px;
        font-size: 12px;
        line-height: 18px;
      }
      .time {
        margin-top: 12px;
        p {
          font-size: 10px;
          line-height: 15px;
        }
      }
    }
  }
`;
