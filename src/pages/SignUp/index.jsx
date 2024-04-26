import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import CustomInput from '../../components/input'
import { Background, Container, Form } from './styles'

function SignUp() {
  return (
    <Container>
      <Background/>
      <Form>
       <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <CustomInput placeholder="Nome"  type="text" icon={FiUser}/>
        <CustomInput placeholder="Email"  type="email" icon={FiMail}/>
        <CustomInput placeholder="Senha"  type="password" icon={FiLock}/>
        
        <Button title="Cadastrar"/>

        <Link to="/">
         Voltar para o login
        </Link>
      </Form>
   </Container>
  )
}

export default SignUp
