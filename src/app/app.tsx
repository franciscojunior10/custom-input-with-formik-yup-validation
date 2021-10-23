import { FormikInputCustom } from 'pages/FormikInputCustom';
import { FormikInputMaterial } from 'pages/FormikInputMaterial';
import { FC } from 'react';
import { GlobalStyles } from 'styles/global';
import * as Styled from './styles';

const App: FC = () => (
  <Styled.Container>
    <GlobalStyles />
    <FormikInputCustom />
    <FormikInputMaterial />
  </Styled.Container>
);

export { App };
