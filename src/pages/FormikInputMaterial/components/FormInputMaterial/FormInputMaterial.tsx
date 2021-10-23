import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';

import * as Styled from './styles';
import { schema } from './schema';

interface Data {
  email: string;
  password: string;
}

const FormInputMaterial: React.FC = () => {
  const initialValues: Data = {
    email: '',
    password: '',
  };

  const handleSubmit = useCallback((values: Data) => {
    const messsage = `Email: ${values.email} \nSenha: ${values.password}`;

    // eslint-disable-next-line no-alert
    alert(messsage);
  }, []);

  return (
    <Styled.Container>
      <h4>Formulário com validação input material-ui</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, handleChange, values }) => (
          <Form>
            <Styled.DivInput>
              <Styled.Input
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                id="email"
                placeholder="Seu e-mail"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Styled.DivInput>

            <Styled.DivInput>
              <Styled.Input
                label="Senha"
                variant="outlined"
                name="password"
                type="password"
                id="password"
                placeholder="Sua senha"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Styled.DivInput>

            <Styled.DivButton>
              <Styled.Button variant="contained" color="primary" type="submit">
                Entrar
              </Styled.Button>
            </Styled.DivButton>
          </Form>
        )}
      </Formik>
    </Styled.Container>
  );
};

export { FormInputMaterial };
