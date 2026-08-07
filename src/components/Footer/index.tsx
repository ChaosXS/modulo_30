import { Link } from 'react-router-dom'
import * as S from './styles'

const logo =
  'https://raw.githubusercontent.com/JoaoVictorAngelo/eFood/0dfa9540e9102b20569206ffe15860a6912a6b81/src/assets/images/logo.svg'
const instagram =
  'https://raw.githubusercontent.com/JoaoVictorAngelo/eFood/main/src/assets/images/instagram.png'
const facebook =
  'https://raw.githubusercontent.com/JoaoVictorAngelo/eFood/main/src/assets/images/facebook.png'
const twitter =
  'https://raw.githubusercontent.com/JoaoVictorAngelo/eFood/main/src/assets/images/twitter.png'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>

      <S.RedesSociais>
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </S.RedesSociais>

      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </S.FooterContainer>
)

export default Footer
