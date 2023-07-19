import styled from 'styled-components';

export const InformationSession = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-around;

  h2 {
    font-size: 1.8rem;
    margin: 10px 0;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    margin: 10px 0;
    text-align: center;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 100px;
    margin: 0 auto;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  div {
    flex: 1;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 1.2rem;
      margin: 5px 20px;
    }

    p {
      margin: 5px 20px;
      font-size: 1rem;
      text-align: justify;
    }

    div {
      flex: none;
      max-width: none;
      margin: 10px auto;
    }
  }
`;
