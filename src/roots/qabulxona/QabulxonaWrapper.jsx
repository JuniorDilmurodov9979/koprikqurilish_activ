import styled from "styled-components";

export const QabulxonaWrapper = styled.div`
  .parent {
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 55px);
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
    grid-area: 2 / 1 / 3 / 2;
  }
  .div4 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .div5 {
    grid-area: 3 / 1 / 5 / 3;
  }
  .div6 {
    grid-area: 5 / 1 / 6 / 3;
  }
  .div7 {
    grid-area: 6 / 2 / 7 / 3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      width: 200px;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    .parent {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, 50px);
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
      grid-area: 3 / 1 / 4 / 2;
    }
    .div4 {
      grid-area: 4 / 1 / 5 / 2;
    }
    .div5 {
      grid-area: 5 / 1 / 7 / 2;
    }
    .div6 {
      grid-area: 7 / 1 / 8 / 2;
    }
    .div7 {
      grid-area: 8 / 1 / 9 / 2;
      button {
        width: 50%;
        max-width: 500px;
        min-width: 200px;
        height: 100%;
      }
    }
  }
`;
