import styled from 'styled-components';

export const ProductsDogs = styled.div`
  h1 {
    font-size: 2rem;
    text-align: center;
  }

  section {
    display: grid;
    grid-template-columns: repeat(5, 310px);
    gap: 20px;
    justify-content: center;
    margin: 20px 30px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.4rem;
    }

    section {
      display: flex;
      flex-direction: column;
      margin: 10px auto;
    }
  }
`;
