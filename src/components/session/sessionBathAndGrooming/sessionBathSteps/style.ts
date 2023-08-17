import styled from 'styled-components';

export const BathStepsSession = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 10px auto;
  flex-direction: column;

  h2 {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px 20px;
    margin: 20px auto 20px 20px;
  }

  img {
    width: 268px;
    height: 180px;
    border-radius: 24px;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 20px;
    }

    div {
      display: flex;
      flex-direction: column;
      margin: 20px auto;
    }

    img {
      width: auto;
      height: auto;
    }
  }
`;
