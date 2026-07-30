import { Prato } from '../../services/api'
import Produto from '../Produto'
import * as S from './styles'

type Props = {
  pratos: Prato[]
}

const PratosList = ({ pratos }: Props) => (
  <div className="container">
    <S.List>
      {pratos.map((p) => (
        <li key={p.id}>
          <Produto produto={p as any} />
        </li>
      ))}
    </S.List>
  </div>
)

export default PratosList
