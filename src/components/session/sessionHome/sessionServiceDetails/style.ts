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
    font-size: 20px;
    text-align: justify;
  }

  .info {
    margin: 40px 0;
    max-width: 760px;
    flex-direction: column;
  }

  h2 {
    margin: 8px auto;
    font-size: 30px;
    text-align: center;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10px auto;

    div {
      flex-direction: column;
    }

    img {
      width: auto;
      height: auto;
      margin: 0 20px 10px 20px;
    }

    .info {
      text-align: justify;
      margin: auto;
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
    font-size: 20px;
    text-align: justify;
  }

  .info {
    margin: 40px 0;
    max-width: 760px;
  }

  h2 {
    margin: 8px auto;
    font-size: 30px;
    text-align: center;
  }

  @media (max-width: 600px) {
    margin: 10px auto;
    flex-direction: column-reverse;

    img {
      width: auto;
      height: auto;
      margin: 0 20px 10px 20px;
    }

    .info {
      text-align: justify;
      margin: auto;
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
    font-size: 20px;
    text-align: justify;
  }

  .info {
    margin: 40px 0;
    max-width: 760px;
    flex-direction: column;
  }

  h2 {
    margin: 8px auto;
    font-size: 30px;
    text-align: center;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10px auto;

    div {
      flex-direction: column;
    }

    img {
      width: auto;
      height: auto;
      margin: 0 20px 10px 20px;
    }

    .info {
      text-align: justify;
      margin: auto;
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
`;
