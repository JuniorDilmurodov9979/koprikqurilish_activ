import styled from "styled-components";

export const LargeText = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 31px;
  color: ${(props) =>
    props.color ? "var(--bluetextcolor)" : "var(--largetextcolor)"};
  @media (max-width: 576px) {
    font-size: 22px;
    line-height: 26px;
  }
`;
export const BackGroundColor = styled.div`
  background-color: var(--bgcolor);
  padding: 30px 0;
  @media (max-width: 768px) {
    padding: 25px 0;
  }
  @media (max-width: 576px) {
    padding: 15px 0;
  }
`;
