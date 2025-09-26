import styled from "styled-components";

export const NewsWrapper = styled.div`
  .news {
    .news__card {
      margin: 15px 0 40px 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
  }
  @media (max-width: 1200px) {
    .news {
      .news__card {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
      }
    }
  }
  @media (max-width: 992px) {
    .news {
      .news__card {
        margin: 15px 0 25px 0;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
      }
      .more {
        padding: 3px 25px;
      }
    }
  }
  @media (max-width: 426px) {
    .news {
      .news__card {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
