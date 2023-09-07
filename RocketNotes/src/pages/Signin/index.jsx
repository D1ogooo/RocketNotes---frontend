import { FiLock, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import CustomInput from '../../components/input'
import { Background, Container, Form } from './styles'

function SignIn() {
  return (
    <Container>
      <Form>
       <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>

        <CustomInput placeholder="Email"  type="text" icon={FiMail}/>
        <CustomInput placeholder="Senha"  type="password" icon={FiLock}/>
        
        <Button title="Entrar"/>

        <Link to="/register">
          Criar conta
        </Link>
      </Form>
      <Background/>
   </Container>
  )
}

export default SignIn