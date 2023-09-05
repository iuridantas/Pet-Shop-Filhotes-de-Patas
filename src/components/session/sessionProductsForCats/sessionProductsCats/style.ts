import styled from 'styled-components';

export const ProductsCats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;

  h1 {
    font-size: 30px;
    text-align: center;
    margin: 10px auto;
  }

  .filter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;

    h2 {
      font-size: 20px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dd9094;
    color: #1f1c6e;
    border: none;
    border-radius: 8px;
    width: 100px;
    height: 40px;
    cursor: pointer;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .select {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 100px;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  input {
    width: 50%;
    border-radius: 10px;
    border-color: black;
    font-size: 20px;
    text-align: center;
    padding: 5px;
    margin: 10px 0;
  }

  select {
    width: auto;
    appearance: none;
    border-radius: 10px;
    border-color: black;
    font-size: 20px;
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
      font-size: 20px;
      margin: 5px 20px;
    }

    .select {
      margin: 0 5px;
    }

    .filter {
      display: flex;
      margin: 10px 20px;

      h2 {
        font-size: 16px;
      }
    }

    button {
      width: 70px;
      height: 30px;
      font-size: 16px;
      margin-bottom: 10px;
    }

    select {
      font-size: 16px;
    }

    input {
      width: 78%;
      font-size: 16px;
      margin: 10px 20px;
    }

    section {
      display: flex;
      flex-direction: column;
      margin: 15px auto;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .select {
      margin: 0 auto;
    }

    select {
      margin: 5px 50px;
    }
  }
`;
