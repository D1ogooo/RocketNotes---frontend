import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Header from '../../components/Header'
import NoteItem from '../../components/NoteItem'
import Section from '../../components/Section'
import Textarea from '../../components/Textarea'
import CustomInput from '../../components/input'
import { Container, Form } from './style'

function New() {
    return (
     <>
      <Container>
        <Header/>
        <main>
         <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <CustomInput placeholder="Titulo"/>
          <Textarea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem value="https://github.com/D1ogooo"/>
            <NoteItem isNew laceholder="Novo link"/>
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
             <NoteItem value="react"/>
             <NoteItem isNew placeholder="Novo tag"/>
            </div>
          </Section>
          <Button title="Salvar"/>
         </Form>
        </main>
      </Container>
     </>
    )
}

export default New