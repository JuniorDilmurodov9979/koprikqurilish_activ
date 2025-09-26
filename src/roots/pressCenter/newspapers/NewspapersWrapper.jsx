import styled from "styled-components";

export const NewspapersWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 40px;
  @media (max-width: 768px) {
    margin-top: 20px;
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
    row-gap: 10px;
  }
`;
