import styled, { keyframes } from 'styled-components';
import { RiLoader4Line } from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const Spinner = styled(RiLoader4Line)`
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.accent};
  animation: ${rotation} 0.5s linear infinite;
`;
