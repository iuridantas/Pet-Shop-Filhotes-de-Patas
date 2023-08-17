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
    padding: 0 7px;
  }

  img {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 600px) {
  }
`;
