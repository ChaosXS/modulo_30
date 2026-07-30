import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { setOpen } from '../../store/reducers/carrinho'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  return (
    <S.HeaderBar>
      <div className="container">
        <S.LinkRestaurantes href="/">Restaurantes</S.LinkRestaurantes>
        <S.Logo
          src="https://raw.githubusercontent.com/ChaosXS/modulo_30/main/src/assets/logo.png"
          alt="efood"
        />
        <S.CartButton onClick={() => dispatch(setOpen(true))}>
          {itens.length} produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.HeaderBar>
  )
}

export default Header
