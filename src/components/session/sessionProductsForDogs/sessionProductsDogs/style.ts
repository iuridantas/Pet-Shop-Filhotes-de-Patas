import styled from 'styled-components';

export const ProductsDogs = styled.div`
  h1 {
    font-size: 2rem;
    text-align: center;
  }

  .filter {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px 0;

    h2 {
      font-size: 1.3rem;
    }
  }

  .select {
    display: flex;
    align-items: center;
  }

  .teste {
    display: flex;
    justify-content: center;
  }

  input {
    width: 50%;
    border-radius: 10px;
    border-color: black;
    font-size: 1.2rem;
    text-align: center;
    padding: 5px;
    margin-top: 10px;
  }

  select {
    width: auto;
    appearance: none;
    border-radius: 10px;
    border-color: black;
    font-size: 1.2rem;
    margin: 0 0 0 10px;
    text-align: center;
    padding: 5px 10px;
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

    .select {
      flex-direction: column;
    }

    .filter {
      display: flex;
      margin: 10px auto;

      h2 {
        font-size: 1.1rem;
      }
    }

    select {
      font-size: 1rem;
      margin: 0;
    }

    input {
      width: 78%;
      font-size: 1rem;
      margin: 10px auto;
    }

    section {
      display: flex;
      flex-direction: column;
      margin: 15px auto;
    }
  }
`;
