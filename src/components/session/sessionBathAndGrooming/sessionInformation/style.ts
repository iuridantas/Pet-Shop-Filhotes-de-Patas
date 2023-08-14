import styled from 'styled-components';

export const InformationSession = styled.div`
  display: flex;
  justify-content: center;

  button {
    position: absolute;
    padding: 17.5px 24px;
    background: #4B0AEB;
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
  }

  @media (max-width: 600px) {
  }
`;
