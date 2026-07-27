import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Produto } from '../../App'
import * as S from './styles'

type Props = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  // Uso efetivo do useSelector conforme requisito [2]
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <span>
          {itens.length} itens, valor total: R$ {valorTotal.toFixed(2)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
