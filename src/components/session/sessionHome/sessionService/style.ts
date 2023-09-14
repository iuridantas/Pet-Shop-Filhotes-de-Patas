import styled from 'styled-components';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export const ServiceSession = styled.div`
  height: 350px;
  padding: 1px 0 0 0;

  h2 {
    text-align: center;
    font-size: 30px;
    margin: 30px 0;
  }

  .info {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  ul {
    background-color: rgba(221, 144, 148, 0.5);
    max-width: 500px;
    width: 100%;
    border-radius: 35px 35px 10px 10px;
    list-style: none;
    float: left;
  }

  li {
    text-align: center;
    font-size: 20px;
    font-style: italic;
    border-bottom: 1px solid #1f1c6e;
    max-width: 555px;
    margin: 0 auto;
    padding: 5px 0;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1f1c6e;
    border-radius: 35px;
    height: 70px;
    font-weight: 600;
    max-width: none;
    padding: 0;
    position: relative;
    color: #fff;
  }

  li:last-of-type {
    border-bottom: none;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 70px;
    background-color: #dd9094;
    color: #1f1c6e;
    border-radius: 35px;
    font-size: 20px;
    text-align: center;
    margin: 0 0 0 15px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    background-color: #1f1c6e;
    color: #dd9094;
  }

  @media only screen and (max-width: 600px) {
    height: auto;

    h2 {
      font-size: 20px;
      margin: 10px auto;
    }

    ul {
      max-width: 300px;
      margin: 0 auto;
    }

    li {
      font-size: 16px;
    }

    .title {
      height: 40px;
    }

    .info {
      flex-direction: column;
      margin: 0 20px;
    }

    a {
      font-size: 16px;
      height: 50px;
      width: 200px;
      margin: 20px auto;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 900px) {
    height: auto;

    .info {
      flex-direction: column;
    }

    ul {
      margin: 0 auto;
    }

    a {
      margin: 20px auto;
    }
  }
`;

export const IconWhatsapp = styled(BsWhatsapp)`
  width: 29px;
  height: 30px;
  margin: 0 0 0 5px;

  @media only screen and (max-width: 600px) {
    width: 25px;
    height: 26px;
  }
`;

export const IconArrowDown = styled(MdOutlineKeyboardArrowDown)`
  right: 8px;
  top: 8px;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  background-color: #dd9094;
  color: #1f1c6e;
  position: absolute;

  @media only screen and (max-width: 600px) {
    width: 25px;
    height: 25px;
  }
`;
