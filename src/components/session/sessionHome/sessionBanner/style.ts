import styled from 'styled-components';

export const BannersSession = styled.div`
  .carousel-container {
    display: flex;
    overflow: hidden;
    position: relative;
  }

  .carousel-content {
    display: flex;
    transition: transform 1s ease-in-out;
  }

  img {
    width: 100%;
  }
`;
