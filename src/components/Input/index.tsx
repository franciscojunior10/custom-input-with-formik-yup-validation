import { FC, Fragment, useCallback, useRef, useState } from 'react';

import { InputProps } from './props';
import * as Styled from './styles';

const Input: FC<InputProps> = props => {
  const { ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Fragment>
      <Styled.Label isError={rest.isError}>{rest.label}</Styled.Label>

      <Styled.Input
        isFocused={isFocused}
        isFilled={isFilled}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        isError={rest.isError}
        {...rest}
      />
    </Fragment>
  );
};

export { Input };
