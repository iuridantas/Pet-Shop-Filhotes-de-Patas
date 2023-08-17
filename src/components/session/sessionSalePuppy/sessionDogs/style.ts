import styled from 'styled-components';

export const DogsSession = styled.div`
  max-width: 1440px;
  margin: 20px auto;

  h2 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }

  .text {
    font-size: 20px;
    margin: 20px 50px;
    text-align: justify;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

  @media (max-width: 600px) {
    margin: 0 0 10px 0;

    h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .text {
      margin: 10px 20px;
      font-size: 16px;
    }

    section {
      display: flex;
      flex-direction: column;
    }
  }
`;
