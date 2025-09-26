import styled from "styled-components";

export const LeadershipCardWrapper = styled.div`
  .leadership__card {
    margin: 40px 0;
    display: flex;
    align-items: center;
    gap: 40px;
    justify-content: flex-start;
    padding: 10px 15px;
    background-color: var(--bgcolor);
    border-radius: 10px;
    border: 1px solid transparent;
    -webkit-box-shadow: 0px 0px 6px 0px rgba(204, 85, 0, 0.2);
    -moz-box-shadow: 0px 0px 6px 0px rgba(204, 85, 0, 0.2);
    box-shadow: 0px 0px 6px 0px rgba(204, 85, 0, 0.2);
    .left {
      border-radius: 10px;
      overflow: hidden;
      width: 150px;
      height: 200px;
      img {
        width: 150px;
        height: 200px;
        object-fit: cover;
        object-position: center;
      }
    }
    .rigth {
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex: 1;
      p {
        color: var(--smalltextcolor);
        font-size: 20px;
        line-height: 22px;
        display: flex;
        align-items: center;
        gap: 10px;
        svg {
          font-size: 1.2rem;
          color: var(--bluetextcolor);
        }
        button {
          color: var(--smalltextcolor);
          padding: 5px 25px;
        }
        &:not(:first-child) {
          font-size: 16px;
          line-height: 18px;
        }
      }
    }
    &:hover {
      transform: scale(1.01);
      -webkit-box-shadow: 0px 0px 10px 2px rgba(204, 85, 0, 0.2);
      -moz-box-shadow: 0px 0px 10px 2px rgba(204, 85, 0, 0.2);
      box-shadow: 0px 0px 10px 2px rgba(204, 85, 0, 0.2);
    }
  }
  @media (max-width: 768px) {
    .leadership__card {
      margin: 20px 0;
      gap: 20px;
      padding: 8px 10px;
      .left {
        width: 130px;
        height: 160px;
        img {
          width: 130px;
          height: 160px;
        }
      }
      .rigth {
        gap: 8px;
        p {
          font-size: 16px;
          line-height: 18px;
          gap: 6px;
          svg {
            font-size: 1rem;
          }
          button {
            padding: 5px 15px;
          }
          &:not(:first-child) {
            font-size: 12px;
            line-height: 14px;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .leadership__card {
      margin: 40px 0;
      display: flex;
      align-items: center;
      gap: 0;
      flex-direction: column;
      justify-content: flex-start;
      padding: 10px 15px;
      .left {
        width: 150px;
        height: 200px;
        transform: translateY(-35px);
        img {
          width: 150px;
          height: 200px;
        }
      }
      .rigth {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        p {
          text-align: center;
          font-size: 20px;
          line-height: 22px;
          gap: 10px;
          svg {
            font-size: 1.2rem;
          }
          button {
            padding: 5px 25px;
          }
          &:not(:first-child) {
            font-size: 16px;
            line-height: 18px;
          }
          &:last-child {
            flex-direction: column;
            gap: 0;
          }
        }
      }
    }
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  min-height: 80vh;
  max-height: 90vh;
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
  }
  button {
    position: absolute;
    top: 30px;
    right: 20px;
    color: black;
    svg {
      font-size: 2rem;
    }
  }
  span {
    margin-top: 30px;
  }
  @media (max-width: 576px) {
    padding: 15px 10px;
    border-radius: 10px;

    button {
      top: 5px;
      right: 5px;
      svg {
        font-size: 1.3;
      }
    }
    span {
      margin-top: 20px;
    }
  }
`;
