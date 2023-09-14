import styled from 'styled-components';

export const CardSession = styled.div`
  width: 430px;
  height: auto;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #fff8c1;

  img {
    height: 400px;
    width: 400px;
    border-radius: 16px;
  }

  .image-loading {
    filter: blur(10px);
    transition: filter 0.3s;
  }

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 16px;
    text-align: justify;
    padding: 5px;
  }

  @media only screen and (max-width: 600px) {
    width: 370px;
    height: auto;
    margin: 0 auto;

    img {
      height: 320px;
      width: 340px;
      border-radius: 16px;
    }
    h2 {
      font-size: 20px;
    }
  }
`;
