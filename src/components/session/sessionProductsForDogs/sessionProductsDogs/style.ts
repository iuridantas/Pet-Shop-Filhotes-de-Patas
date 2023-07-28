import styled from 'styled-components';

export const ProductsDogs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  .filter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    h2 {
      font-size: 1.3rem;
    }
  }

  .select {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 100px;
  }

  .input {
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
    margin: 10px 0;
  }

  select {
    width: auto;
    appearance: none;
    border-radius: 10px;
    border-color: black;
    font-size: 1.2rem;
    margin: 5px 0;
    text-align: center;
    padding: 5px 10px;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 20px auto;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.4rem;
    }

    .select {
      margin: 0 auto;
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
