import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

import { FlexContainer } from '../../../styles/generics';

export const Container = styled(Link)`
  width: 100%;
  background: ${({ theme }) => theme.colors.card};
  padding: 1.5em;
  border-radius: 1em;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 16px ${({ theme }) => darken(0.1, theme.colors.background)};
  }
`;

export const LocationAndTemperature = styled.div`
  h2 {
    font-size: 1.25rem;
  }

  > p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  div {
    p {
      font-size: 3rem;
      margin-bottom: -0.75rem;

      span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 1.25rem;
        vertical-align: text-top;
        margin-left: -0.25rem;
      }
    }

    > span {
      color: ${({ theme }) => theme.colors.textCompletary};
    }
  }
`;

export const Weather = styled(FlexContainer).attrs({
  direction: 'column',
  alignItems: 'center',
})`
  img {
    width: 5rem;
    height: auto;
  }
`;

export const Details = styled(FlexContainer).attrs({
  justify: 'space-between',
  alignItems: 'center',
})`
  margin-top: 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  span {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Divider = styled.hr`
  border: none;
  content: '';
  height: 16px;
  width: 1px;
  background: ${({ theme }) => theme.colors.textSecondary};
`;
