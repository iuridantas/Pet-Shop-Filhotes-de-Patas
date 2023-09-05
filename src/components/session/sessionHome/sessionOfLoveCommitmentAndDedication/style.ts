import styled from 'styled-components';

export const LoveCommitmentAndDedicationSession = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-around;

  h2 {
    font-size: 30px;
    margin: 10px 0;
    text-align: center;
  }

  p {
    font-size: 20px;
    margin: 10px 0;
    text-align: justify;
  }

  img {
    width: 300px;
    height: 200px;
    margin: 0 auto;
  }

  .image-loading {
    filter: blur(10px);
    transition: filter 0.3s;
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
      font-size: 20px;
      margin: 5px 20px;
    }

    p {
      margin: 5px 20px;
      font-size: 16px;
      text-align: justify;
    }

    div {
      flex: none;
      max-width: none;
      margin: 10px auto;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
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
    font-size: 36px;
    margin: 20px 0;
  }

  h2 {
    font-size: 30px;
    margin: 0 0 20px 0;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 30px;
      margin: 10px 20px;
    }

    h2 {
      font-size: 20px;
      margin: 5px 20px;
    }
  }
`;
