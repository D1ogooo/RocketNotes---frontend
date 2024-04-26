import { RiShutDownLine } from 'react-icons/ri'
import { Container, Logout, Profile } from './styles'

function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/D1ogooo.png" alt="Foto do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Diogo Maçal</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}

export default Header