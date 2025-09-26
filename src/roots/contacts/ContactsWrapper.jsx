import styled from "styled-components";

export const ContactsWrapper = styled.div`
  .boxs {
    margin: 30px 0;
    display: grid;
    align-items: flex-start;
    grid-template-columns: 300px auto;
    gap: 30px;
    .contact {
      .location {
        margin-top: 15px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;
        p {
          color: var(--smalltextcolor);
          font-size: 18px;
          line-height: 20px;
        }
        a {
          text-decoration: none;
          color: var(--smalltextcolor);
          font-size: 18px;
          line-height: 20px;
          &:hover {
            color: var(--bluetextcolor);
          }
        }
      }
    }
    .form {
      .parent {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 55px);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        div {
          input,
          textarea {
            border-radius: 5px;
            background-color: var(--cardbgcolor);
            width: 100%;
            height: 100%;
            padding: 10px 15px;
            outline: none;
            border: none;
            border-bottom: 3px solid transparent;
            &:placeholder-shown {
              color: var(--bluetextcolor);
            }
            &:focus {
              border-color: var(--bluetextcolor);
              border-radius: 5px 5px 0 0;
            }
            font-weight: 400;
            font-size: 18px;
            line-height: 20px;
            color: var(--bluetextcolor);
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
          width: 200px;
          height: 100%;
        }
      }
    }
  }
  iframe {
    border: none;
    height: 400px;
    width: 100%;
  }
  @media (max-width: 768px) {
    .boxs {
      margin: 20px 0;
      grid-template-columns: 1fr;
      .contact {
        .location {
          margin-top: 10px;
          gap: 10px;
          p {
            color: var(--smalltextcolor);
            font-size: 14px;
            line-height: 16px;
          }
          a {
            font-size: 14px;
            line-height: 16px;
          }
        }
      }
      .form {
        .parent {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(5, 50px);
          grid-column-gap: 15px;
          grid-row-gap: 15px;
          div {
            input,
            textarea {
              font-size: 16px;
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
            width: 50%;
            max-width: 500px;
            min-width: 200px;
            height: 100%;
          }
        }
      }
    }
  }
`;
