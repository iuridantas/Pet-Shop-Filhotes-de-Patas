import styled from 'styled-components';

export const AestheticsandHygieneSession = styled.div`
  background-color: #fff8c1;
  padding: 1px 0;

  div {
    display: flex;
    max-width: 1440px;
    margin: 20px auto;
  }

  img {
    width: 600px;
    margin: 0 auto;
  }

  p {
    margin: 8px 40px;
    font-size: 1.4rem;
    text-align: justify;
  }

  .info {
    margin: 40px 0;
    max-width: 760px;
    flex-direction: column;
  }

  h2 {
    margin: 8px auto;
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10px auto;

    div {
      flex-direction: column;
    }

    img {
      width: 370px;
      margin-bottom: 10px;
    }

    .info {
      text-align: justify;
      margin: auto;
    }

    h2 {
      font-size: 1.4rem;
      margin: 0 20px;
    }

    p {
      margin: 10px 20px;
      font-size: 1.2rem;
    }
  }
`;

export const SalePuppySession = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 20px auto;

  img {
    width: 600px;
    margin: 0 auto;
  }

  p {
    margin: 8px 40px;
    font-size: 1.4rem;
    text-align: justify;
  }

  .info {
    margin: 40px 0;
    max-width: 760px;
  }

  h2 {
    margin: 8px auto;
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    margin: 10px auto;
    flex-direction: column-reverse;

    img {
      width: 370px;
      margin-bottom: 10px;
    }

    .info {
      text-align: justify;
      margin: auto;
    }

    h2 {
      font-size: 1.4rem;
      margin: 0 20px;
    }

    p {
      margin: 10px 20px;
      font-size: 1.2rem;
    }
  }
`;

export const SaleProductSession = styled.div`
  background-color: #fff8c1;
  padding: 1px 0;

  div {
    display: flex;
    max-width: 1440px;
    margin: 20px auto;
  }

  img {
    width: 600px;
    height: 360px;
    margin: 0 auto;
  }

  p {
    margin: 8px 40px;
    font-size: 1.4rem;
    text-align: justify;
  }

  .info {
    margin: 40px 0;
    max-width: 760px;
    flex-direction: column;
  }

  h2 {
    margin: 8px auto;
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10px auto;

    div {
      flex-direction: column;
    }

    img {
      width: 370px;
      height: 220px;
      margin-bottom: 10px;
    }

    .info {
      text-align: justify;
      margin: auto;
    }

    h2 {
      font-size: 1.4rem;
      margin: 0 20px;
    }

    p {
      margin: 10px 20px;
      font-size: 1.2rem;
    }
  }
`;
