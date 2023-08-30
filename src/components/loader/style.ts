import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
`;

export const LoaderContainer = styled.div`
  display: block;
  position: relative;
  max-width: 1440px;
  margin: 19% auto;
`;

export const StyledSVG = styled.svg`
  width: 3.25em;
  transform-origin: center;
  animation: ${rotateAnimation} 2s linear infinite;
`;

export const StyledCircle = styled.circle`
  fill: none;
  stroke: hsl(214, 97%, 59%);
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: ${dashAnimation} 1.5s ease-in-out infinite;
`;
