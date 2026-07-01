import { useDispatch } from 'react-redux'
import { useGetRestaurantesQuery, Restaurante } from '../services/api'
import { adicionar } from '../store/reducers/carrinho'

const ListaRestaurantes = () => {
  const dispatch = useDispatch()
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (isLoading) return <h3>Carregando...</h3>

  return (
    <ul>
      {/* Adicionado o tipo (res: Restaurante) para evitar o erro de 'any' */}
      {restaurantes?.map((res: Restaurante) => (
        <li key={res.id}>
          {res.titulo}
          <button
            onClick={() =>
              // Adicionado 'imagem' para satisfazer o tipo Produto/Restaurante
              dispatch(
                adicionar({
                  id: res.id,
                  nome: res.titulo,
                  preco: 0,
                  imagem: res.capa
                })
              )
            }
          >
            Adicionar
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ListaRestaurantes
