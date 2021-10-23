import styled, { css } from 'styled-components';
import { InputProps } from './props';

interface LabelProps {
  isError: boolean | undefined;
}

export const Input = styled.input<InputProps>`
  height: 40px;
  width: 100%;
  padding: 10px 15px;
  background: transparent;
  border: 2px solid var(--color-grey);
  border-radius: 8px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: var(--color-border);
      background-color: var(---color-white);
      color: var(--color-black);
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      border-color: var(--color-border);
      background-color: var(---color-white);
      color: var(--color-black);
    `}

  ${({ isError }) =>
    isError
      ? css`
          border-color: var(--color-error);
          background-color: var(--color-white);
          color: var(--color-black);
        `
      : css`
          &:hover {
            border-color: var(--color-border);
            background-color: var(--color-white);
          }
        `}
`;

export const Label = styled.label<LabelProps>`
  display: block;
  margin: 5px 0 5px;
  ${({ isError }) =>
    isError &&
    css`
      color: var(--color-error);
    `}
`;
