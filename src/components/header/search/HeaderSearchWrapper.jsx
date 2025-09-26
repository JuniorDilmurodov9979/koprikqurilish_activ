import styled from "styled-components";

export const HeadermidleWrapper = styled.div`
  .search__bar {
    position: relative;
    margin-right: 40px;
    /* background: rgba(228, 227, 227, 0.65); */
    background: #00000078;
    border-radius: 15px 15px 15px 4px;
    border: 1px solid #ffa800;
    input {
      background-color: transparent;
      outline: none;
      border: none;
      width: 344px;
      padding: 8px 60px 8px 15px;
      font-size: 14px;
      line-height: 19px;
      color: #fff;
    }
    ::placeholder {
      color: white;
      opacity: 1; /* Firefox */
    }

    ::-ms-input-placeholder {
      /* Edge 12-18 */
      color: white;
    }
    button {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 44px;
      background: #ffa800;
      border-radius: 0px 15px 15px 0px;
    }
  }
  @media (max-width: 992px) {
    .search__bar {
      margin: 15px 0;

      border-radius: 15px 15px 15px 4px;
      input {
        background-color: transparent;
        outline: none;
        border: none;
        width: 100%;
        padding: 8px 60px 8px 15px;
      }
      button {
        width: 30px;
      }
    }
  }
`;
