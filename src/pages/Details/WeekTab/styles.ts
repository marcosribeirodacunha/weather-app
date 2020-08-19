import styled from 'styled-components';
import { FlexContainer } from '../../../styles/generics';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`;

export const Card = styled(FlexContainer).attrs({
  direction: 'column',
  alignItems: 'center',
})`
  background: ${({ theme }) => theme.colors.card};
  padding: 1rem 1.5rem;
  border-radius: 1rem;

  h2 {
    font-weight: 700;
    font-size: 1rem;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  img {
    width: 4rem;
    height: auto;
    margin: 0.5rem 0;
  }

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
