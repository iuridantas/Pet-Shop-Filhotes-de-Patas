import styled from 'styled-components';

export const MapsSession = styled.div`
  iframe {
    width: 100vw;
    height: 400px;
    border: 0;
  }

  @media (max-width: 600px) {
    iframe {
    height: 250px;
  }
  }
`;
