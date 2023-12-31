import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
 }

 body {
    background-color: ${(props) => props.theme.COLORS.BACKGROUND_800};
    color: ${(props) => props.theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
}

 body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
}

 a {
    text-decoration: none;
 }

 button, a {
    cursor: pointer;
    transition: filter 0.2s;
 }

 button:hover, a:hover {
    filter: brightness(0.9s)
 }
`