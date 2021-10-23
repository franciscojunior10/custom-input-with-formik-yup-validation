import { FormikInputCustom } from 'pages/FormikInputCustom';
import { FC } from 'react';
import { GlobalStyles } from 'styles/global';
import * as Styled from './styles';

const App: FC = () => (
  <Styled.Container>
    <GlobalStyles />
    <FormikInputCustom />
  </Styled.Container>
);

export { App };
