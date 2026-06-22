import { Produto as ProdutoType } from '../../services/api'
import * as S from './styles'

type Props = {
  produto: ProdutoType
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

const Produto = ({ produto, adicionarAoCarrinho }: Props) => (
  <S.Produto>
    <S.Capa>
      <img src={produto.imagem} alt={produto.nome} />
    </S.Capa>
    <S.Titulo>{produto.nome}</S.Titulo>
    <S.Prices>
      <strong>{produto.preco}</strong>
    </S.Prices>
    <S.BtnComprar onClick={() => adicionarAoCarrinho(produto)} type="button">
      Adicionar ao carrinho
    </S.BtnComprar>
  </S.Produto>
)

export default Produto
