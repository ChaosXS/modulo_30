import { useGetRestaurantesQuery } from '../../services/api'
import Header from '../../components/Header'
import Produtos from '../../components/Produtos'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (isLoading) {
    return (
      <div className="container">
        <h3>Carregando...</h3>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="container">
        <Produtos produtos={restaurantes || []} />
      </div>
    </>
  )
}

export default Home
