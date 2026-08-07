import { Link } from 'react-router-dom'
import Tag from '../Tag'
import { Restaurante } from '../../services/api'
import * as S from './styles'

type Props = {
  produto: Restaurante
}

const Produto = ({ produto }: Props) => {
  return (
    <S.Produto>
      <img src={produto.capa} alt={produto.titulo} />
      <S.Infos>
        {produto.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{produto.tipo}</Tag>
      </S.Infos>
      <S.Conteudo>
        <div>
          <h3>{produto.titulo}</h3>
          <span>{produto.avaliacao} ⭐</span>
        </div>
        <p>{produto.descricao}</p>
        <Link to={`/perfil/${produto.id}`}>Saiba mais</Link>
      </S.Conteudo>
    </S.Produto>
  )
}

export default Produto
