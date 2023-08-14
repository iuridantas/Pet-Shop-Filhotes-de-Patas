import styled from 'styled-components';

export const DogsSession = styled.div`
  max-width: 1440px;
  margin: 20px auto;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }

  .text {
    font-size: 1.4rem;
    margin: 20px 12px 20px 0;
    text-align: justify;
  }

  section {
    display: grid;
    grid-template-columns: repeat(3, 480px);
    gap: 20px;
  }

  @media (max-width: 600px) {
    margin: 0 0 10px 0;

    h2 {
      font-size: 1.4rem;
      margin-bottom: 20px;
    }

    .text {
      margin: 10px 20px;
      font-size: 1rem;
    }

    section {
      display: flex;
      flex-direction: column;
    }
  }
`;
