import styled from 'styled-components';

export const Logo = styled.div`
  font-weight: 700;
  letter-spacing: 0.25em;
  font-size: 1.5em;
`;

export const Title = styled.h1`
  margin: 2em auto;
  max-width: 800px;
  text-align: center;
`;

export const Form = styled.form`
  label,
  div {
    display: flex;
    justify-content: center;
  }

  div {
    margin-top: 1em;
  }

  input {
    width: 100%;
    max-width: 600px;
    padding: 1.5em;
    border: none;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
    color: #fff;
    background: #414141;
    backdrop-filter: blur(10px) opacity(70%);
  }

  button {
    padding: 1.5em;
    border: none;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    font-weight: 600;
    background: #00e5ae;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const CardContainer = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 1em;
`;
