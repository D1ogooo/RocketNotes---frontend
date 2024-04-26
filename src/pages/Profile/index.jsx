import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

import Button from '../../components/Button'

import { Avatar, Container, Form } from './style'

function Profile() {
    return(
        <Container>
          <header>
            <a href="/">
              <FiArrowLeft/>
            </a>
          </header>
          <Form>
            <Avatar>
              <img src="https://github.com/D1ogooo.png" alt="foto do usuario"/>
              <label htmlFor="avatar">
                <FiCamera/>
                <input id="avatar" type="file"/>
              </label>
            </Avatar>
            <Input placeholder="Nome" type="text" icon={FiUser}/>
            <Input placeholder="Email" type="email" icon={FiMail}/>
            <Input placeholder="Senha atual" type="password" icon={FiLock}/>
            <Input placeholder="Nova senha" type="password" icon={FiLock}/>
            <Button title="Salvar"/>
          </Form>
        </Container>
    )
}

export default Profile