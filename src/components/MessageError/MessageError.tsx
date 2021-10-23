import React, { FC } from 'react';
import ImageAlert from 'assets/alert.svg';
import { MessageErrorProps } from './props';

import { Content } from './styles';

const MessageError: FC<MessageErrorProps> = ({ text }) => (
  <Content>
    <img src={ImageAlert} alt="Alert" />
    {text}
  </Content>
);

export { MessageError };
