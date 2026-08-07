import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setOpen } from '../../store/reducers/carrinho'

import * as S from './styles'

const logo =
  'https://raw.githubusercontent.com/JoaoVictorAngelo/eFood/0dfa9540e9102b20569206ffe15860a6912a6b81/src/assets/images/logo.svg'

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootState) => state.carrinho)

  const isHome = location.pathname === '/'

  const openCart = () => {
    dispatch(setOpen(true))
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        {isHome ? (
          <>
            <Link to="/">
              <img src={logo} alt="efood" />
            </Link>
            <S.Titulo>
              Viva experiências gastronômicas <br />
              no conforto da sua casa
            </S.Titulo>
          </>
        ) : (
          <S.HeaderBar>
            <Link to="/">Restaurantes</Link>
            <Link to="/">
              <img src={logo} alt="efood" />
            </Link>
            <span onClick={openCart}>
              {itens.length} produto(s) no carrinho
            </span>
          </S.HeaderBar>
        )}
      </div>
    </S.HeaderContainer>
  )
}

export default Header
