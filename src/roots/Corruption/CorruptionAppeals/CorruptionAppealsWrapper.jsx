import styled from "styled-components";

export const CorruptionAppealsWrapper = styled.div`
  .boxs {
    margin: 40px 0;
    display: flex;
    justify-content: center;

    .form {
      background-color: var(--cardbgcolor);
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 800px;

      .parent {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 55px);
        grid-column-gap: 20px;
        grid-row-gap: 20px;

        div {
          input,
          textarea {
            border-radius: 6px;
            background-color: #f5f8fa;
            width: 100%;
            height: 100%;
            padding: 12px 16px;
            outline: none;
            border: 1px solid #e0e0e0;
            border-bottom: 3px solid transparent;
            transition: border-color 0.2s ease;
            font-size: 16px;
            color: #333;

            &::placeholder {
              color: #9baec8;
            }

            &:focus {
              border-color: var(--bluetextcolor);
              border-radius: 6px 6px 0 0;
              background-color: #fff;
            }
          }

          textarea {
            resize: none;
          }
        }
      }

      .div1 {
        grid-area: 1 / 1 / 2 / 2;
      }
      .div2 {
        grid-area: 1 / 2 / 2 / 3;
      }
      .div3 {
        grid-area: 2 / 1 / 4 / 3;
      }
      .div4 {
        grid-area: 4 / 2 / 5 / 3;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        button {
          background-color: var(--bluetextcolor);
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
          width: 200px;
          height: 100%;

          &:hover {
            background-color: #0056b3;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .boxs {
      .form {
        padding: 20px;

        .parent {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(5, 50px);
          grid-column-gap: 15px;
          grid-row-gap: 15px;

          div {
            input,
            textarea {
              font-size: 15px;
              line-height: 20px;
            }
          }
        }

        .div1 {
          grid-area: 1 / 1 / 2 / 2;
        }
        .div2 {
          grid-area: 2 / 1 / 3 / 2;
        }
        .div3 {
          grid-area: 3 / 1 / 5 / 2;
        }
        .div4 {
          grid-area: 5 / 1 / 6 / 2;

          button {
            width: 100%;
            min-width: unset;
            max-width: unset;
          }
        }
      }
    }
  }
`;

export const LargeTextCorruption = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 31px;
  text-align: center;
  color: ${(props) =>
    props.color ? "var(--bluetextcolor)" : "var(--largetextcolor)"};
  @media (max-width: 576px) {
    font-size: 22px;
    line-height: 26px;
    text-align: start;
  }
`;
export const CorruptionContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;
