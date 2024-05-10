import { FiPlus, FiSearch } from 'react-icons/fi'
import { Brand, Container, Content, Menu, NewNote, Search } from './styles'

import { ButtonText } from '../../components/ButtonText'
import Header from '../../components/Header'
import { Note } from '../../components/Note'
import Section from '../../components/Section'
import CustomInput from '../../components/input'


function Home() {
  return (
    <Container>
      <Brand>
       <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
       <li>
        <ButtonText title="Todos" />
       </li>
       <li>
        <ButtonText title="React" />
       </li>
       <li>
        <ButtonText title="Nodejs" />
       </li>
      </Menu>

      <Search>
        <CustomInput placeholder="pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
           data={{
            title: 'React',
             tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' },
             ],
            }}
          />
        </Section>
      </Content>
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}

export default Home
