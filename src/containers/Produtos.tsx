import { useDispatch } from 'react-redux'
import { useGetProdutosQuery, Produto as ProdutoType } from '../services/api'
import { adicionar } from '../store/reducers/carrinho'
import ProdutoComponente from '../components/Produto'
import * as S from './styles'

const Produtos = () => {
  const dispatch = useDispatch()
  const { data: produtos, isLoading } = useGetProdutosQuery()

  const adicionarAoCarrinho = (produto: ProdutoType) => {
    dispatch(adicionar(produto))
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtos?.map((produto: ProdutoType) => (
        <ProdutoComponente
          key={produto.id}
          produto={produto}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
