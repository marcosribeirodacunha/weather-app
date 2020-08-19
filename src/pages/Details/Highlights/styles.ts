import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;

  h1 {
    font-size: 1.25rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  background: ${({ theme }) => theme.colors.card};
  padding: 1rem 1.5rem;
  border-radius: 1rem;

  h2 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  strong {
    font-size: 2.5rem;
    font-weight: 400;

    span {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 1rem;
      vertical-align: text-top;
    }
  }

  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.5rem;
  }
`;

export const UVIndexLabel = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(11, 1fr);

  span {
    text-align: center;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  span:nth-child(1) {
    grid-column-start: 3;
  }

  span:nth-child(2) {
    grid-column-start: 6;
  }

  span:nth-child(3) {
    grid-column-start: 8;
  }

  span:nth-child(4) {
    grid-column-start: 10;
  }
`;

export const UVIndexBar = styled.div<{ value: number }>`
  content: '';
  height: 1rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  margin-bottom: 0.5rem;

  div {
    content: '';
    width: calc((100% / 11) * ${props => props.value});
    height: 100%;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 1rem;
  }
`;
