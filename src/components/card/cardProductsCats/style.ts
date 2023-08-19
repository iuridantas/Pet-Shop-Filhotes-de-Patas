import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { PiMagnifyingGlassPlus } from 'react-icons/pi';

export const CardSession = styled.div`
  width: 345px;
  height: 330px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24),
    1px 1px 5px black;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  img {
    height: 200px;
    width: 200px;
    padding: 10px;
  }

  .information {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid black;
    width: 100%;
    height: 26px;
  }

  .brand {
    height: 26px;
  }

  h2 {
    font-size: 20px;
    text-align: center;
  }

  h3 {
    font-size: 20px;
    margin-top: 5px;
  }

  h4 {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    width: 320px;
    height: auto;

    .information {
      height: auto;
    }

    .brand {
      height: auto;
    }

    img {
      padding: 20px;
    }

    h3 {
      font-size: 19px;
    }

    h4 {
      font-size: 15px;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const IconLeft = styled(FiChevronLeft)`
  position: absolute;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  cursor: pointer;
  user-select: none;
`;

export const IconRight = styled(FiChevronRight)`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  cursor: pointer;
  user-select: none;
`;

export const IconMagnifyingGlass = styled(PiMagnifyingGlassPlus)`
  position: absolute;
  top: 5%;
  transform: translateY(-50%);
  font-size: 25px;
  cursor: pointer;

  @media (max-width: 600px) {
    top: 15%;
  }
`;

export const FullScreenCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  color: white;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const ButtonIcon = styled(AiOutlineClose)`
  color: white;
  cursor: pointer;
  font-size: 32px;
  z-index: 1;
  position: absolute;
  right: 600px;
  top: 200px;

  &:hover {
    color: red;
  }

  @media (max-width: 600px) {
    color: red;
    right: 50px;
    top: 150px;
  }
`;

export const CardSessionError = styled.div`
  width: auto;
  height: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24),
    1px 1px 5px black;
  border-radius: 32px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    img {
      height: 200px;
      width: 200px;
      padding: 10px;
    }
  }
`;
