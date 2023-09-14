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

  .image-loading {
    filter: blur(10px);
    transition: filter 0.3s;
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

  @media only screen and (max-width: 600px) {
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

  @media only screen and (min-width: 768px) and (max-width: 900px) {
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
      margin: 0 20px;
    }

    p {
      margin: 10px 20px;
    }
  }

  @media only screen and (min-width: 901px) and (max-width: 1024px) {
    img {
      width: 500px;
      height: auto;
      margin-left: 40px;
    }

    .info {
      margin: 40px auto;
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

  @media only screen and (max-width: 600px) {
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

  @media only screen and (min-width: 768px) and (max-width: 900px) {
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
      margin: 0 20px;
    }

    p {
      margin: 10px 20px;
    }
  }

  @media only screen and (min-width: 901px) and (max-width: 1024px) {
    img {
      width: 450px;
      height: auto;
      margin-right: 40px;
    }

    .info {
      margin: 40px auto;
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

  @media only screen and (max-width: 600px) {
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

  @media only screen and (min-width: 768px) and (max-width: 900px) {
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
      margin: 0 20px;
    }

    p {
      margin: 10px 20px;
    }
  }

  @media only screen and (min-width: 901px) and (max-width: 1024px) {
    img {
      width: 500px;
      height: auto;
      margin-left: 40px;
    }

    .info {
      margin: 40px auto;
    }
  }
`;
