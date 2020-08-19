import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { FlexContainer } from '../../styles/generics';

/*
 SIDEBAR
*/
export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: fixed;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.card};
  height: 100%;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

/*
ASIDE CONTENT: -- CURRENT FORECAST
*/
export const CurrentForecast = styled(FlexContainer).attrs({
  direction: 'column',
  alignItems: 'center',
})`
  margin: auto 0;
  text-align: center;

  h1 {
    font-size: 1.5rem;
  }

  > p:first-of-type {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  > p:last-of-type {
    margin-top: 2rem;

    svg {
      margin-right: 0.5rem;
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const Weather = styled.div`
  margin: 1.5rem 0 0;

  img {
    width: 10rem;
    height: auto;
  }

  p::first-letter {
    text-transform: uppercase;
  }
`;

export const Temperature = styled.div`
  strong {
    font-weight: 400;
    font-size: 6rem;
  }

  span {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    vertical-align: 100%;
    margin-left: -1rem;
  }

  p {
    margin-top: -1.5rem;
    color: ${({ theme }) => theme.colors.textCompletary};
  }
`;

/*
ASIDE CONTENT: -- DAILY FORECAST NAVIGATION
*/
export const DailyForecastNavigation = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const DayLink = styled.a<{ active?: boolean }>`
  width: max-content;
  margin: 0.5rem auto;
  cursor: pointer;
  position: relative;

  p {
    font-weight: 700;
  }

  span {
    display: block;
    font-size: 0.8rem;
    margin-top: -0.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};

    &::first-letter {
      text-transform: uppercase;
    }
  }

  ${props =>
    props.active &&
    css`
      p {
        color: ${({ theme }) => theme.colors.white};
      }

      span {
        color: ${({ theme }) => theme.colors.black};
      }

      &:before {
        position: absolute;
        top: -0.5rem;
        bottom: -0.5rem;
        left: -130px;
        right: -4rem;
        z-index: -1;
        content: '';
        background: ${({ theme }) => theme.colors.accent};
        border-top-right-radius: 4rem;
        border-bottom-right-radius: 4rem;
      }
    `}
`;

/*
MAIN SIDE CONTENT
*/
export const MainContent = styled.div`
  width: calc(100% - 300px);
  margin-left: auto;
  padding: 1.5rem;
`;

export const Search = styled(FlexContainer)`
  input {
    min-width: 250px;
    border: 1px solid transparent;
    border-right: none;
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
    background: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 0.5rem 0 0.5rem 1rem;
    transition: border 0.3s;

    &:focus,
    &:focus + button {
      border-color: ${({ theme }) => theme.colors.accent};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  button {
    border: 1px solid transparent;
    border-left: none;
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    background: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.accent};
    padding: 0.5rem 1rem;
    font-weight: 700;
    transition: border 0.3s;
    margin-right: 1rem;

    &:hover {
      background: ${({ theme }) => shade(0.1, theme.colors.card)};
    }
  }
`;

export const ErrorMessage = styled.span`
  color: #f33;
  letter-spacing: 1px;
`;

/*
TODAY / WEEK TABS
*/
export const Tab = styled.div`
  margin: 2rem 0 1rem;
`;

export const TabLink = styled.a<{ active?: boolean }>`
  cursor: pointer;
  color: ${props =>
    props.active
      ? props.theme.colors.textPrimary
      : props.theme.colors.textSecondary};

  ${props =>
    props.active &&
    css`
      font-weight: 700;
      border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
    `}

  & + & {
    margin-left: 1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &:last-child {
    margin-left: auto !important;
    display: inline-flex;
    align-items: center;
  }
`;
