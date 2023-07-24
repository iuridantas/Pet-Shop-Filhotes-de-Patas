import styled from 'styled-components';

export const ProductsDogs = styled.div`
  h1 {
    font-size: 2rem;
    text-align: center;
  }

  input {
    text-align: center;
    display: block;
    margin: 10px auto;
    width: 25%;
    border-radius: 10px;
    border-color:black;
    font-size: 1.2rem;
  }

  section {
    display: grid;
    grid-template-columns: repeat(5, 310px);
    gap: 20px;
    justify-content: center;
    margin: 20px 30px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.4rem;
    }

    input {
    width: 50%;
    font-size: 1rem;
  }

    section {
      display: flex;
      flex-direction: column;
      margin: 15px auto;
    }
  }
`;
