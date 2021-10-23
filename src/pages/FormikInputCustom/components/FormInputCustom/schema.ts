import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().required('Email obrigatório').email('Email inválido'),
  password: Yup.string().required('Senha obrigatório'),
});

export { schema };
