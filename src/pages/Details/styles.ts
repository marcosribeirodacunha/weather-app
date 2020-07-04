import styled from 'styled-components';

export const Logo = styled.div`
  font-weight: 700;
  letter-spacing: 0.25em;
  font-size: 1.5em;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: rgba(65, 65, 65, 0.7);
  padding: 2em;
  border-radius: 1em;
  margin-bottom: 3em;
`;

export const Location = styled.h1`
  color: #00e5ae;
  font-size: 2em;
  margin: 1em 0;
`;

export const WeatherNow = styled.div`
  h2 {
    font-size: 1.5em;
    font-weight: 500;
    color: lightgray;
    margin-bottom: 1em;
  }

  > div {
    display: flex;

    > p {
      text-align: center;

      img {
        display: block;
        width: 100%;
        max-width: 10em;
        margin: 0 auto;
      }
    }
  }
`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5em;

  strong {
    font-size: 6em;

    span {
      font-size: 3rem;
      font-weight: 500;
      vertical-align: super;
      color: gray;
    }
  }

  div {
    span {
      font-size: 1.5em;

      & + span {
        margin-left: 1.5em;
      }

      svg {
        margin-right: 0.25rem;
      }

      &:first-child svg {
        color: #eb4034;
      }

      &:last-child svg {
        color: #4553f5;
      }
    }
  }
`;

export const DetailsNow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    span {
      color: gray;

      svg {
        margin-right: 0.5em;
        font-size: 1.25rem;
      }
    }

    p {
      font-size: 1.5em;
      margin-left: 1.25em;
    }
  }
`;

export const HourDetails = styled(CardContainer)`
  margin-bottom: 1em;
  align-items: center;

  img {
    width: 2.5em;
  }
`;
