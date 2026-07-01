import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  return (
    <header>
      <h1>efood</h1>
      <span>{itens.length} produto(s) no carrinho</span>
    </header>
  )
}

export default Header
