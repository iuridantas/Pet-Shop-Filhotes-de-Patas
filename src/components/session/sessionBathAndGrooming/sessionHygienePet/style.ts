import styled from 'styled-components';

export const HygienePetSession = styled.div`
  display: flex;
  padding: 48px 0;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;

  img {
    position: relative;
    left: 16px;
    top: 15px;
    border-radius: 24px;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin: 0 auto 10px auto;
    text-align: center;
  }

  p {
    max-width: 600px;
    margin: 0 auto 10px auto;
    text-align: center;
    font-weight: 400;
    font-size: 20px;
  }

  .benefits {
    padding: 4px 40px;
    background-color: #fff8c1;
    border-radius: 16px;
    justify-content: center;
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    margin: 16px 0;
    font-weight: 400;
    font-size: 20px;
  }

  @media (max-width: 600px) {
    padding: 16px 0;
    flex-direction: column;

    img {
      height: 300px;
      position: initial;
      margin: 0 auto;
    }

    h2 {
      font-size: 20px;
      margin: 10px auto;
    }

    p {
      font-size: 16px;
      margin: 10px 20px;
    }

    .benefits {
      margin: 0 20px;
      padding: 4px 20px;
    }

    li {
      font-size: 16px;
      text-align: justify;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
