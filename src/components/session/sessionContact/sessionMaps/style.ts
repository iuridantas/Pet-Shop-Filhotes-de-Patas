import styled from 'styled-components';

export const MapsSession = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: center;

  h1 {
    font-size: 36px;
    margin: 20px auto;
  }

  iframe {
    width: 100%;
    height: 400px;
    border: 0;
  }

  .map-loading {
    filter: blur(10px);
    transition: filter 0.3s;
  }

  @media (max-width: 600px) {
    iframe {
      height: 250px;
    }

    h1 {
      font-size: 30px;
      margin: 10px auto;
    }
  }
`;
