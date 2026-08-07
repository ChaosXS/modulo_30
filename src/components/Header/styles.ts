import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-image: url('https://raw.githubusercontent.com/JoaoVictorAngelo/eFood/0dfa9540e9102b20569206ffe15860a6912a6b81/src/assets/images/HeroHeader.svg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a,
  span {
    color: #e66767;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
  }
`

export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #e66767;
  max-width: 539px;
  width: 100%;
  margin-top: 138px;
  text-align: center;
`
