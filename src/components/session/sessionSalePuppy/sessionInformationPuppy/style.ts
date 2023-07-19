import styled from 'styled-components';

export const Title = styled.div`
  margin: 20px 0;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    margin: 10px 0;

    h1 {
      font-size: 1.4rem;
    }
  }
`;

export const InformationPuppySession = styled.div`
  display: flex;
  margin: 20px 190px;

  img {
    height: 600px;
    margin: 0 20px;
    box-shadow: 10px 10px 20px black;
  }

  p {
    margin: 8px 30px;
    font-size: 1.4rem;
    text-align: justify;
  }

  div {
    margin: 40px 0;
  }

  h2 {
    margin: 8px 30px;
    font-size: 1.8rem;
    text-align: justify;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10px auto;

    img {
      height: auto;
      margin-bottom: 10px;
    }

    div {
      text-align: justify;
      margin: auto;
    }

    h2 {
      font-size: 1.2rem;
      margin: 0 20px;
    }

    p {
      margin: 10px 20px;
      font-size: 1rem;
    }
  }
`;
