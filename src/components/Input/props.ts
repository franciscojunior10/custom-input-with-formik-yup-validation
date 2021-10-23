import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isFocused?: boolean;
  isFilled?: boolean;
  isError?: boolean;
  label?: string;
};
