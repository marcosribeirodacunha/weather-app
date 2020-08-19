import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 1rem;
  }
`;

export const Search = styled.div`
  text-align: left;
  max-width: 600px;
  margin: 2rem auto 2rem;

  h1 {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 1rem;
  }

  form {
    display: flex;
  }

  input {
    width: 100%;
    border: 1px solid transparent;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    background: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 1rem 1.5rem;
    transition: border 0.3s;

    &:focus,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 0 100px ${({ theme }) => theme.colors.card} inset;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.textPrimary};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  button {
    border: none;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    padding: 1rem 1.5rem;
    font-weight: 700;
    transition: background 0.3s;

    &:hover {
      background: ${({ theme }) => shade(0.2, theme.colors.accent)};
    }
  }

  > span {
    color: #f33;
    letter-spacing: 1px;
  }
`;

export const Spotlight = styled.span`
  position: relative;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    content: '';
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export const DiscoverTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 2rem 0 1rem;
  text-align: center;
`;
