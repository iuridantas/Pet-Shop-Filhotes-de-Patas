import styled from 'styled-components';

export const Title = styled.div`
  max-width: 1440px;
  margin: 20px auto;

  h1 {
    font-size: 36px;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    margin: 10px 0;

    h1 {
      font-size: 30px;
    }
  }
`;

export const InformationPuppySession = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;

  img {
    height: 600px;
    box-shadow: 10px 10px 20px black;
    margin: 0 auto 0 50px;
  }

  .image-loading {
    filter: blur(10px);
    transition: filter 0.3s;
  }

  p {
    margin: 20px 30px;
    font-size: 20px;
    text-align: justify;
  }

  div {
    padding: 10px 0;
    margin: 0 20px 0 auto;
  }

  h2 {
    margin: 8px 30px;
    font-size: 30px;
    text-align: justify;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 10px auto;

    img {
      height: 400px;
      margin: 0 auto 10px auto;
    }

    div {
      text-align: justify;
      margin: 10px auto;
    }

    h2 {
      font-size: 20px;
      margin: 0 20px;
    }

    p {
      margin: 10px 20px;
      font-size: 16px;
    }
  }

  @media only screen and(min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    margin: 10px auto;

    img {
      height: auto;
      width: 500px;
      margin: 0 auto 10px auto;
    }
  }
`;
