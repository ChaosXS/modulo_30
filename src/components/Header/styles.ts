import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.bege};
  padding: 40px 0;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`

export const LinkRestaurantes = styled.a`
  color: ${cores.salmao};
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
`

export const Logo = styled.img`
  width: 125px;
  /* Garante que o logo fique no meio mesmo com textos de tamanhos diferentes nas pontas */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const CartButton = styled.button`
  background: transparent;
  border: none;
  color: ${cores.salmao};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`
