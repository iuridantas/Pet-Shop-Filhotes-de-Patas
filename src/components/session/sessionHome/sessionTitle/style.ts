import styled from 'styled-components';

export const TitleSession = styled.div`
  display: flex;
  max-width: 1440px;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;

  h1 {
    font-size: 4rem;
    margin: 20px 0;
  }

  h2 {
    font-size: 1.8rem;
    margin: 10px 0;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.8rem;
      margin: 10px auto;
    }

    h2 {
      font-size: 1.2rem;
      margin: 5px auto;
    }
  }
`;
