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
    display: flex;
    position: relative;
    align-items: center;
    text-decoration: none;
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

  .container-link span {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }

  .container-link:hover {
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.35);
    transform: translate(0px, -2px);
  }

  .submenu-dog {
    display: block;
    position: absolute;
    font-size: 24px;
    width: auto;
    cursor: pointer;
    border-radius: 8px;
    background: #dd9094;
    padding: 10px;
    z-index: 1;
  }

  .submenu-dog a {
    display: block;
    padding: 5px 0;
    color: #1f1c6e;
    text-decoration: none;
  }

  .submenu-dog a:hover {
    color: #1f1c6e;
    text-decoration: underline;
  }

  .submenu-cat {
    display: block;
    position: absolute;
    font-size: 24px;
    width: auto;
    cursor: pointer;
    border-radius: 8px;
    background: #dd9094;
    padding: 10px;
    z-index: 1;
  }

  .submenu-cat a {
    display: block;
    padding: 5px 0;
    color: #1f1c6e;
    text-decoration: none;
  }

  .submenu-cat a:hover {
    color: #1f1c6e;
    text-decoration: underline;
  }

  .submenu-closed {
    display: none;
  }

  button {
    display: none;
  }

  @media only screen and (max-width: 600px) {
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

    .submenu-dog {
      width: 90%;
      margin: 0 20px;
      padding: 5px 0;
      top: 190px;
    }

    .submenu-dog a {
      display: block;
      padding: 5px 10px;
    }

    .submenu-cat {
      width: 90%;
      margin: 0 20px;
      padding: 5px 0;
      top: 254px;
    }

    .submenu-cat a {
      display: block;
      padding: 5px 10px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    div {
      padding: 32px 16px;
    }

    img {
      width: 200px;
      height: 100px;
    }

    ul {
      padding: 0 20px;
      display: block;
      position: absolute;
      background-color: #fff8c1;
      width: 100%;
      top: 164px;
      right: 0;
      height: 0;
      transition: 0.6s;
      z-index: 1000;
      visibility: hidden;
      overflow-y: hidden;
    }

    nav.active ul {
      height: calc(100vh - 164px);
      visibility: visible;
      overflow-y: auto;
    }

    a {
      padding: 16px 0;
      margin: 16px 0;
    }

    button {
      display: flex;
      font-size: 40px;
      background: none;
      color: #1f1c6e;
      border: none;
      cursor: pointer;
    }

    
    .submenu-dog {
      width: 95%;
      margin: 0 20px;
      padding: 5px 0;
      top: 190px;
    }

    .submenu-dog a {
      display: block;
      padding: 5px 10px;
    }

    .submenu-cat {
      width: 95%;
      margin: 0 20px;
      padding: 5px 0;
      top: 254px;
    }

    .submenu-cat a {
      display: block;
      padding: 5px 10px;
    }
  }
`;
