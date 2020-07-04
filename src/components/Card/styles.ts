import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  &:hover a {
    transform: scale(0.95);
  }

  &:hover button {
    transform: scale(1) translate(2.5em, -2em) rotate(0);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: rgba(65, 65, 65, 0.7);
    padding: 2em;
    border-radius: 1em;
    transition: transform 0.2s;
    cursor: pointer;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & + div {
        margin-left: 1em;
      }
    }

    h6 {
      color: #00e5ae;
    }

    span {
      margin-top: 1em;

      img {
        width: 4em;
        height: 4em;
      }
    }

    strong {
      text-align: right;
      font-size: 2.5em;
      vertical-align: super;
      line-height: 1;
    }

    small {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 0.75em;
      color: #afafaf;

      svg {
        margin-left: 0.5em;
      }
    }
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1;
  transform: scale(0) rotate(180deg);
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4em;
  height: 4em;
  background: #1f1f1f;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.4s, background 0.2s;

  &:hover {
    background: #3b0303;
  }

  svg {
    font-size: 1.5em;
  }
`;
