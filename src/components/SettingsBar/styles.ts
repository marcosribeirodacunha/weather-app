import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeToggler = styled.button<{ activeTheme: string }>`
  margin-right: 0.75rem;
  background: ${({ theme }) => theme.colors.card};
  border: none;
  width: 3rem;
  height: 1.5rem;
  border-radius: 1rem;
  position: relative;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    transition: all 0.3s;

    background: ${props =>
      props.activeTheme === 'light'
        ? props.theme.colors.textSecondary
        : props.theme.colors.accent};

    left: ${props => (props.activeTheme === 'light' ? 0 : '1.5rem')};
  }

  svg {
    height: auto;
    width: 1em;

    /* MOON */
    &:first-child {
      color: ${({ theme }) => theme.colors.white};
      opacity: ${props => props.activeTheme === 'light' && 0};
    }

    /* SUN */
    &:last-child {
      color: ${({ theme }) => theme.colors.textPrimary};
      opacity: ${props => props.activeTheme === 'dark' && 0};
    }
  }
`;

export const Button = styled.button<{ active?: boolean }>`
  margin-right: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  width: 2.4rem;
  height: 2.4rem;
  font-weight: 700;
  background: ${props =>
    props.active ? props.theme.colors.accent : props.theme.colors.card};
  color: ${props =>
    props.active
      ? props.theme.colors.black
      : props.theme.colors.textCompletary};

  transition: background 0.3s;

  ${props =>
    !props.active &&
    css`
      &:hover {
        background: ${shade(0.2, props.theme.colors.background)};
      }
    `}
`;

export const Language = styled.div<{ open: boolean }>`
  position: relative;
  display: inline-block;

  img {
    width: 1.5rem;
    height: auto;
    margin-right: 0.5rem;
  }

  /* DROPDOWN BUTTON */
  button {
    background: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.3s;

    svg {
      transition: transform 0.3s;

      ${props =>
        props.open &&
        css`
          transform: rotate(180deg);
        `}
    }

    &:hover {
      background: ${({ theme }) => shade(0.2, theme.colors.background)};
    }
  }

  /* DROPDOWN ITEMS */
  ul {
    position: absolute;
    top: 110%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.card};
    border-radius: 0.5rem;
    overflow: hidden;
    transform: translateY(1rem);
    opacity: 0;
    transition: all 0.3s;
    z-index: -1;

    ${props =>
      props.open &&
      css`
        transform: translateY(0);
        opacity: 1;
        z-index: 1;
      `}

    li {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: ${({ theme }) => shade(0.2, theme.colors.background)};
      }
    }
  }
`;
