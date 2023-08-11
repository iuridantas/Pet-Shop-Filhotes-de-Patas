import styled from 'styled-components';

export const CardSession = styled.div`
  width: 430px;
  height: 590px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #fff8c1;

  img {
    height: 400px;
    width: 400px;
    border-radius: 1rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
    text-align: justify;
    padding: 5px;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    width: 370px;
    height: auto;
    margin: 0 auto;

    img {
      height: 320px;
      width: 340px;
      border-radius: 1rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
