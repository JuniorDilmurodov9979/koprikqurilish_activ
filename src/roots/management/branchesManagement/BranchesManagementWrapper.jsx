import styled from "styled-components";

export const BranchesManagementWrapper = styled.div`
  .svg {
    margin: auto;
    margin-top: 40px;
    svg {
      width: 792px;
      height: 516px;
      .active {
        fill: rgb(8, 58, 151);
      }
      .active2 {
        fill: rgb(8, 58, 151);
      }
      path {
        fill: rgb(101, 144, 224);
        stroke: rgb(247, 247, 247);
        stroke-width: 1.07675px;
      }
    }
  }
  @media (max-width: 1200px) {
    .svg {
      padding: 30px;
      width: 610px;
      overflow: auto;
    }
  }
  @media (max-width: 992px) {
    .svg {
      width: 690px;
    }
  }
  @media (max-width: 768px) {
    .svg {
      width: 510px;
      height: 400px;
    }
  }
  @media (max-width: 576px) {
    .svg {
      width: 460px;
      height: 380px;
    }
  }
  @media (max-width: 500px) {
    .svg {
      width: 300px;
      height: 380px;
    }
  }
`;
