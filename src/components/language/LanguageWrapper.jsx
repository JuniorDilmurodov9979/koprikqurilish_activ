import styled from "styled-components";

export const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  p {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => (props.color ? "#ffffff" : "var(--headertextcolor)")};
    display: flex;
    align-items: center;
    border-right: 1px solid #ffa800;
    padding-right: 7px;
    cursor: pointer;
    &:last-child {
      border-right: 0px;
    }
  }
  .active {
    color: #ffa800;
  }
  .sotsial__network {
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => (props.color ? "#ffffff" : "var(--headertextcolor)")};
      background-color: transparent;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      svg {
        font-size: 1.6rem;
      }
      &:hover {
        background-color: ${(props) =>
          props.color ? "#ffffff" : "var(--headertextcolor)"};
        color: ${(props) => (props.color ? "#ffa800" : "#ffffff")};
      }
    }
  }
  @media (max-width: 576px) {
    .sotsial__network {
      justify-content: center;
      gap: 8px;
      a {
        width: 30px;
        height: 30px;
        svg {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media (max-width: 310px) {
    .sotsial__network {
      display: none;
    }
  }
`;
