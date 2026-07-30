import styled from 'styled-components'

export const Container = styled.section`
  padding: 80px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

// Mantendo exportação antiga caso algum outro arquivo a use para evitar novos erros
export const Produtos = List
