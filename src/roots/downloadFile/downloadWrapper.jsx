import styled from "styled-components";

export const DownloadWrapper = styled.div`
  section {
    display: flex;
    align-items: center;
    gap: 20px;
    p {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    a,
    p {
      text-decoration: none;
      color: var(--bluetextcolor);
    }
    .icon {
      color: var(--bluetextcolor);
    }
  }
`;
