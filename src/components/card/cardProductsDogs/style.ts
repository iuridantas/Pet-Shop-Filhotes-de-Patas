import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

export const CardSession = styled.div`
  width: 308px;
  height: 375px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24),
    1px 1px 5px black;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    height: 250px;
    width: 250px;
    padding: 10px;
    cursor: pointer;
  }

  .information {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid black;
    width: 100%;
  }

  h2 {
    font-size: 1.3rem;
    text-align: center;
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 5px;
  }

  h4 {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    width: 320px;
    height: 365px;
    margin: 0 auto;

    img {
      padding: 20px;
    }

    h2 {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    h4 {
      font-size: 0.9rem;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const IconLeft = styled(FiChevronLeft)`
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  cursor: pointer;
  user-select: none;
`;

export const IconRight = styled(FiChevronRight)`
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  cursor: pointer;
  user-select: none;
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
    width: auto;
    height: auto;
  }

  @media (max-width: 600px) {
    img {
      width: 400px;
      height: auto;
    }
  }
`;

export const ButtonIcon = styled(AiOutlineClose)`
  color: white;
  cursor: pointer;
  font-size: 32px;
  z-index: 1;
  margin-top: 20px;

  &:hover {
    color: red;
  }

  @media (max-width: 600px) {
    color: red;
    margin-top: 10px;
  }
`;
