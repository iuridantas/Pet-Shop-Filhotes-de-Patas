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
    width: 243px;
    height: 80px;
    top: 500px;
    cursor: pointer;
  }

  h1 {
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  @media (max-width: 600px) {
    button {
      width: 140px;
      height: 40px;
      top: 250px;
    }

    h1 {
      font-size: 18px;
      gap: 6px;
    }
  }
`;
