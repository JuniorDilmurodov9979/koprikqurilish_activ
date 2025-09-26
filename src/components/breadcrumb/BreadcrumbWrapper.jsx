import styled from "styled-components";

export const BreadcrumbWrapper = styled.div`
  margin-bottom: 30px;
  a {
    cursor: pointer;
  }
  a,
  p,
  li {
    text-decoration: none;
    color: var(--headertextcolor);
  }
  @media (max-width: 576px) {
    margin-bottom: 20px;
    a,
    p,
    li {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;
