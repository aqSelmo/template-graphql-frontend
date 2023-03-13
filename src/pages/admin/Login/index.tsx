import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleNotch } from 'react-icons/fa';
import Head from '../includes/head';
import { Box, Container, Footer, Input, Loading } from './styles';

interface FormError {
  email?: {
    type: string;
    message: string;
  };
  password?: {
    type: string;
    message: string;
  };
}

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [formErrors, setFormErrors] = useState<FormError>({});

  useEffect((): void => {
    const getJwt = localStorage.getItem('admin::token');

    setTimeout(() => (getJwt ? setLoading(false) : setLoading(false)), 2000);
  }, []);

  const formSubmitEvent = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setFormErrors({ email: { type: 'error', message: 'erro no email' } });
  };

  return (
    <>
      <Head title="Administradores - Login" />

      <Container>
        <Box>
          {loading && (
            <Loading>
              <FaCircleNotch color="#73AABF" size={40} />
            </Loading>
          )}

          <h1>Login</h1>
          <form onSubmit={formSubmitEvent}>
            <Input placeholder="e-mail" type="email" margin={true} error={!!formErrors?.email} />
            <Input placeholder="senha" type="password" margin={true} error={!!formErrors?.password} />
            <button type="submit">ENTRAR</button>
            <Link to={'sss'}>LEMBRAR SENHA</Link>
          </form>
        </Box>
        <Footer>Powered by Guilherme Falcão</Footer>
      </Container>
    </>
  );
};

export default Login;
