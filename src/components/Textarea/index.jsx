import { Container } from './style'

function Textarea({ value, ...rest }) {
   return (
    <>
     <Container {...rest}>
      {value}
     </Container>
    </>
   )
}

export default Textarea