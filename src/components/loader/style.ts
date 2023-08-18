import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
`;

const percentageAnimation = keyframes`
   0% {
    content: "0%"
  }

  50% {
    content: "50%"
  }

  100% {
    content: "100%"
  }
`;

export const LoaderSection = styled.div`
  display: block;
  position: relative;
  height: 50px;
  width: 200px;
  border: 2px solid #000000;
  max-width: 1440px;
  margin: 19% auto;

  &::before {
    content: '';
    background: linear-gradient(
      to right,
      #dd9094 0%,
      #fff8c1 50%,
      #1f1c6e 100%
    );
    position: absolute;
    height: 100%;
    animation: ${loadingAnimation} 2s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    color: #000000;
    animation: ${percentageAnimation} 2s linear infinite;
  }
`;
