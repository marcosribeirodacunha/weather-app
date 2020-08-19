import styled from 'styled-components';

import { FlexContainer } from '../../../styles/generics';

export const Container = styled(FlexContainer).attrs({
  justify: 'space-between',
  alignItems: 'center',
})`
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 1rem;

  & + & {
    margin-top: 1rem;
  }

  strong {
    font-size: 1.5rem;
    font-weight: 400;

    span {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      vertical-align: text-top;
    }
  }

  p span {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Icon = styled(FlexContainer).attrs({
  alignItems: 'center',
})`
  img {
    width: 3rem;
    height: auto;
    margin-right: 0.5rem;
  }
  p {
    color: ${({ theme }) => theme.colors.textSecondary};

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const Wind = styled(FlexContainer).attrs({
  alignItems: 'center',
})`
  svg {
    margin-left: 1rem;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;
