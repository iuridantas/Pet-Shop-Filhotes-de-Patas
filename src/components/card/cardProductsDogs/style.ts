import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const CardSession = styled.div`
  width: 300px;
  height: 375px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24),
    5px 5px 10px black;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    height: 250px;
    width: 250px;
    padding: 10px;
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

export const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(-50%);
  display: flex;

  @media (max-width: 600px) {
    bottom: auto;
    transform: translateY(-295%);
  }
`;

export const LeftIcon = styled(FiChevronLeft)`
  font-size: 50px;
  cursor: pointer;
  user-select: none;
`;

export const RightIcon = styled(FiChevronRight)`
  font-size: 50px;
  cursor: pointer;
  margin-left: 150px;
  user-select: none;
`;
