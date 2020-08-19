import styled, { css } from 'styled-components';

import { FlexContainer } from '../../../styles/generics';

const cardStyle = css`
  background: ${({ theme }) => theme.colors.card};
  padding: 1rem 1.5rem;
  border-radius: 1rem;

  h1 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  strong {
    font-size: 3rem;
    font-weight: 400;

    span {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      vertical-align: text-top;
    }
  }
`;

export const Container = styled(FlexContainer)``;

export const DayTemperature = styled(FlexContainer).attrs({
  justify: 'space-between',
})`
  ${cardStyle}

  > div:first-child {
    margin-right: 2.5rem;
    text-align: center;

    img {
      width: 6rem;
      height: auto;
    }

    p {
      margin-top: 6px;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p span {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

export const DetailedTemperature = styled(FlexContainer)`
  ${cardStyle}

  margin-left: 1rem;

  div {
    text-align: center;
  }

  div + div {
    margin-left: 4rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textCompletary};
  }
`;
