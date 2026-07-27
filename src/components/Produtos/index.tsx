import { Produto as ProdutoType } from '../../App'
import Produto from '../Produto'
import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos, favoritos, favoritar }: Props) => {
  return (
    <S.Produtos>
      {produtos.map((p) => (
        <Produto
          estaNosFavoritos={favoritos.some((f) => f.id === p.id)}
          key={p.id}
          produto={p}
          favoritar={favoritar}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
