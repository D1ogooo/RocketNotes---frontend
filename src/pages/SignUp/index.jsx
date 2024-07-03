import { useState } from 'react';
import { api } from '../../services/api';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Background, Container, Form } from './styles';
import Button from '../../components/Button';
import CustomInput from '../../components/Input';

function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos necessários");
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <CustomInput placeholder="Nome" type="text" icon={FiUser} onChange={(e) => setName(e.target.value)} />
        <CustomInput placeholder="Email" type="email" icon={FiMail} onChange={(e) => setEmail(e.target.value)} />
        <CustomInput placeholder="Senha" type="password" icon={FiLock} onChange={(e) => setPassword(e.target.value)} />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
         Voltar para o login
        </Link>
      </Form>
    </Container>
  );
}

export default SignUp;
