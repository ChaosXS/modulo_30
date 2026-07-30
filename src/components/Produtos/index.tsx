import { Restaurante } from '../../services/api'
import Produto from '../Produto'
import * as S from './styles'

type Props = {
  produtos: Restaurante[]
}

const ProdutosList = ({ produtos }: Props) => {
  return (
    <S.Container>
      <S.List>
        {produtos.map((restaurante) => (
          <li key={restaurante.id}>
            <Produto produto={restaurante} />
          </li>
        ))}
      </S.List>
    </S.Container>
  )
}

export default ProdutosList
