import styled from 'styled-components';

export const BathAndGroomingSession = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    margin: 20px 0;
    text-align: center;
  }

  h2 {
    font-size: 1.8rem;
    margin: 10px 0;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    margin: 10px 50px;
    text-align: justify;
  }

  div {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .container-link {
    background: #dd9094;
    color: #1f1c6e;
    cursor: pointer;
    font-size: 1.4rem;
    text-align: center;
    border-radius: 8px;
    width: 300px;
    padding: 10px;
    border: none;
    box-shadow: 4px 4px 3px #1f1c6e;
    transform: translate(0px, 0px);
    transition: all 0.3s ease-in-out;
    margin: 0 20px;
  }

  .container-link:last-of-type {
    margin-right: 0;
  }

  .container-link:hover {
    background-color: #1f1c6e;
    color: #dd9094;
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.35);
    transform: translate(0px, -2px);
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.4rem;
      margin: 10px 4px;
    }

    h2 {
      font-size: 1.2rem;
      margin: 5px 10px;
    }

    p {
      margin: 5px 10px;
      font-size: 1rem;
    }

    div {
      flex-direction: column;
    }

    .container-link {
      font-size: 1rem;
      width: 220px;
      padding: 5px;
      margin: 10px auto;
    }
  }
`;
