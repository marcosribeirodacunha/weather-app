import styled, { css } from 'styled-components';

export const Container = styled.div``;

interface FlexContainerProps {
  direction?: string;
  wrap?: string;
  justify?: string;
  alignItems?: string;
  alignContent?: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;

  ${props =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}

  ${props =>
    props.wrap &&
    css`
      flex-wrap: ${props.wrap};
    `}

  ${props =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}

  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}

  ${props =>
    props.alignContent &&
    css`
      align-content: ${props.alignContent};
    `}

`;
