import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as S from './styles'
import cesta from '../../assets/cesta.png'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    return (acc += item.preco)
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <img src={cesta} alt="Cesta de compras" />
        <span>
          {itens.length} itens, valor total: R$ {valorTotal.toFixed(2)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
