import { createGlobalStyle } from 'styled-components'

export const cores = {
  salmao: '#E66767',
  bege: '#FFEBD9',
  begeClaro: '#FFF8F2',
  branco: '#FFF',
  corPrincipal: '#E66767', // Adicionado para compatibilidade
  corSecundaria: '#FFEBD9',
  corFundo: '#FFF8F2'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }
  body {
    background-color: ${cores.begeClaro};
    color: ${cores.salmao};
  }
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
