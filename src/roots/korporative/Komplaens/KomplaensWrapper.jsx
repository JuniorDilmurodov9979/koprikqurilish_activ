import styled from "styled-components";

export const KomplaensWrapper = styled.div`
  section {
    margin-top: 10px;
    .icon {
      color: rgb(204, 85, 0);
      font-size: 40px;
      margin-right: 10px;
    }
    a {
      text-decoration: none;
      color: var(--largetextcolor);
      font-size: 18px;
      display: flex;
      align-items: center;
      &:hover {
        color: var(--bluetextcolor);
      }
    }
  }
`;
