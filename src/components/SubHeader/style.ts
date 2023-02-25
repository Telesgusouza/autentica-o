import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0;
  text-align: center;

  h1 {
    font-weight: 400;
    font-size: 2.2rem;
    margin-bottom: 8px;
  }

  p {
    font-weight: 300;
    font-size: 0.94rem;
  }

  @media (max-width: 290px) {
    margin-top: 30px;
  }

  @media (max-width: 260px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
