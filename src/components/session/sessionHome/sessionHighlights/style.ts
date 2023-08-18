import styled from 'styled-components';

export const HighlightsSession = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 20px auto;

  div {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  h2 {
    font-size: 30px;
    text-align: center;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 40px auto 0 auto;
  }

  a {
    display: flex;
    flex-direction: column;
    padding: 0 7px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: #000000;
  }

  p {
    width: 105px;
    font-size: 20px;
    font-weight: bold;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 80px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: 5px auto;

    h2 {
      font-size: 20px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 10px auto;
    }

    li {
      margin: 10px auto;
    }
  }
`;
