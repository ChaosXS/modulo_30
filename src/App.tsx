import { useState } from 'react'
import Header from './components/Header'
import Produtos from './components/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './services/api'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  // Busca os produtos via RTK Query conforme requisito da atividade [3]
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      setFavoritos(favoritos.filter((p) => p.id !== produto.id))
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos
          produtos={produtos || []}
          favoritos={favoritos}
          favoritar={favoritar}
        />
      </div>
    </>
  )
}

export default App
