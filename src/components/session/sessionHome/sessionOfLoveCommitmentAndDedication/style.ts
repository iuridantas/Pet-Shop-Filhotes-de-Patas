import styled from 'styled-components';

export const LoveCommitmentAndDedicationSession = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 20px auto;
  justify-content: space-around;

  h2 {
    font-size: 1.8rem;
    margin: 10px 0;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    margin: 10px 0;
    text-align: justify;
  }

  img {
    width: 300px;
    height: 200px;
    margin: 0 auto;
  }

  div {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    
    h2 {
      font-size: 1.2rem;
      margin: 5px 20px;
    }

    p {
      margin: 5px 20px;
      font-size: 1rem;
      text-align: justify;
    }

    div {
      flex: none;
      max-width: none;
      margin: 10px auto;
    }
  }
`;

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
