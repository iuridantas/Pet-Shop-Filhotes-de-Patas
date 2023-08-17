import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff8c1;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
    max-width: 1440px;
  }

  img {
    width: 200px;
    height: 100px;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }

  .container-link {
    display: block;
    background: #dd9094;
    color: #1f1c6e;
    cursor: pointer;
    font-size: 24px;
    border-radius: 8px;
    width: auto;
    padding: 10px;
    border: none;
    box-shadow: 4px 4px 3px #1f1c6e;
    transform: translate(0px, 0px);
    transition: all 0.3s ease-in-out;
  }

  .container-link:hover {
    background-color: #1f1c6e;
    color: #dd9094;
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.35);
    transform: translate(0px, -2px);
  }

  button {
    display: none;
  }

  @media (max-width: 600px) {
    div {
      padding: 32px 16px;
    }

    img {
      width: 160px;
      height: 80px;
    }

    ul {
      padding: 0 20px;
      display: block;
      position: absolute;
      background-color: #fff8c1;
      width: 100%;
      top: 144px;
      right: 0;
      height: 0;
      transition: 0.6s;
      z-index: 1000;
      visibility: hidden;
      overflow-y: hidden;
    }

    nav.active ul {
      height: calc(100vh - 144px);
      visibility: visible;
      overflow-y: auto;
    }

    a {
      font-size: 23px;
      padding: 16px 0;
      margin: 16px 0;
    }

    button {
      display: flex;
      font-size: 32px;
      background: none;
      color: #1f1c6e;
      border: none;
      cursor: pointer;
    }
  }
`;
