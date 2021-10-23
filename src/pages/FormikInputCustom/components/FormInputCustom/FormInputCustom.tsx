import { Input } from 'components/Input';
import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';

import { MessageError } from 'components/MessageError';
import * as Styled from './styles';
import { schema } from './schema';

interface Data {
  email: string;
  password: string;
}

const FormInputCustom: React.FC = () => {
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
      <h4>Formulário com input customizado</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, handleBlur, handleChange, values }) => (
          <Form>
            <Input
              label="Email"
              name="email"
              id="email"
              type="email"
              placeholder="Seu e-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              isError={touched.email && !!errors.email}
            />

            {touched.email && errors.email && (
              <MessageError text={errors.email} />
            )}

            <Input
              label="Senha"
              name="password"
              id="password"
              type="password"
              placeholder="Sua senha"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              isError={touched.password && !!errors.password}
            />

            {touched.password && errors.password && (
              <MessageError text={errors.password} />
            )}

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

export { FormInputCustom };
