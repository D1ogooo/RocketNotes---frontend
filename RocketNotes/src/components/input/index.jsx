import { Container } from './style'

function CustomInput({ icon: Icon, ...rest }) {
    return (
        <>
            <Container>
                {Icon && <Icon size={20} />}
                <input {...rest} />
            </Container>
        </>
    )
}

export default CustomInput

