import styled from 'styled-components';

export const SocialMediaSession = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 20px auto;
  justify-content: center;

  h2 {
    font-size: 30px;
    margin: 10px 0;
    text-align: center;
  }

  p {
    font-size: 20px;
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

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 20px;
      margin: 5px 20px;
    }

    p {
      margin: 5px 20px;
      font-size: 16px;
      text-align: justify;
    }

    div {
      flex: none;
      max-width: none;
      margin: 10px auto;
    }
  }
`;
