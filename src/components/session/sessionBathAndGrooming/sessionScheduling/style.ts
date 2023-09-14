import styled from 'styled-components';

export const SchedulingSession = styled.div`
  display: flex;
  justify-content: center;

  button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4b0aeb;
    border: none;
    border-radius: 8px;
    width: 280px;
    height: 80px;
    top: 500px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    transform: translate(0px, -5px);
  }

  h1 {
    font-weight: 700;
    font-size: 36px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  @media only screen and (max-width: 600px) {
    button {
      width: 170px;
      height: 40px;
      top: 250px;
    }

    h1 {
      font-size: 20px;
      gap: 6px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 900px) {
    button {
      width: 170px;
      height: 40px;
      top: 310px;
    }

    h1 {
      font-size: 20px;
      gap: 6px;
    }
  }

  @media only screen and (min-width: 901px) and (max-width: 1024px) {
    button {
      width: 170px;
      height: 40px;
      top: 350px;
    }

    h1 {
      font-size: 20px;
      gap: 6px;
    }
  }
`;

