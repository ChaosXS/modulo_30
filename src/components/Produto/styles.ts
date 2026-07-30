import styled from 'styled-components'

export const Produto = styled.div`
  background-color: #fff;
  color: #e66767;
  border: 1px solid #e66767;
  margin-bottom: 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  /* TAMANHO PADRÃO DA IMAGEM DO RESTAURANTE */
  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  /* Se o seu projeto usa tags de Destaque ou Categoria na imagem */
  .tag-container {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
  }
`

export const Conteudo = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
  }

  span {
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  a {
    background-color: #e66767;
    color: #ffebd9;
    text-decoration: none;
    padding: 4px 8px;
    font-weight: bold;
    font-size: 14px;
    display: inline-block;
    text-align: center;
  }
`
