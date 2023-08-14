import styled from 'styled-components';

export const MapsSession = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: center;

  iframe {
    width: 100%;
    height: 400px;
    border: 0;
  }

  @media (max-width: 600px) {
    iframe {
      height: 250px;
    }
  }
`;
