import styled from 'styled-components';

export const ProductsDogs = styled.div`
  h1 {
    font-size: 2rem;
    text-align: center;
  }

  .filter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    h2 {
      font-size: 1.3rem;
    }
  }

  .select {
    display: flex;
    align-items: center;
  }

  input {
    width: 25%;
    border-radius: 10px;
    border-color: black;
    font-size: 1.2rem;
    margin: 0 300px 0 550px;
    text-align: center;
    padding: 5px;
  }

  select {
    width: auto;
    appearance: none;
    border-radius: 10px;
    border-color: black;
    font-size: 1.2rem;
    margin-left: 10px;
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

    .filter {
      display: flex;
      flex-direction: column;
      margin: 10px 0;

      h2 {
        font-size: 1.1rem;
        margin: 0 10px 0 0;
      }
    }

    .select {
      margin-top: 10px;
    }

    select {
      font-size: 1rem;
      margin-left: 5px;
    }

    input {
      width: 50%;
      font-size: 1rem;
      margin: 0 auto;
    }

    section {
      display: flex;
      flex-direction: column;
      margin: 15px auto;
    }
  }
`;
