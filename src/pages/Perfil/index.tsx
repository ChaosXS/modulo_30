import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar, setOpen } from '../../store/reducers/carrinho'
import { useGetRestaurantesQuery, Prato } from '../../services/api'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import * as S from './styles'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  const restaurante = restaurantes?.find((r) => String(r.id) === String(id))

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [productModal, setProductModal] = useState<Prato | null>(null)
  const dispatch = useDispatch()

  const addToCart = (product: Prato) => {
    dispatch(adicionar(product))
    dispatch(setOpen(true))
    setModalIsOpen(false)
  }

  if (isLoading) {
    return (
      <div className="container" style={{ padding: '40px' }}>
        <h3>Carregando cardápio...</h3>
      </div>
    )
  }

  if (!restaurante) {
    return (
      <div className="container" style={{ padding: '40px' }}>
        <h3>Restaurante não encontrado</h3>
      </div>
    )
  }

  return (
    <>
      <Header />
      <Banner
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />

      <div className="container" style={{ marginTop: '56px' }}>
        <S.List>
          {restaurante.cardapio && restaurante.cardapio.length > 0 ? (
            restaurante.cardapio.map((prato: Prato) => (
              <S.Card key={prato.id}>
                <img src={prato.foto} alt={prato.nome} />
                <div style={{ padding: '8px' }}>
                  <h3>{prato.nome}</h3>
                  <p>{prato.descricao}</p>
                  <button
                    onClick={() => {
                      setProductModal(prato)
                      setModalIsOpen(true)
                    }}
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </S.Card>
            ))
          ) : (
            <p>Nenhum produto cadastrado neste cardápio.</p>
          )}
        </S.List>
      </div>

      {modalIsOpen && productModal && (
        <S.Modal className="is-visible">
          <S.ModalContent className="container">
            <img src={productModal.foto} alt={productModal.nome} />
            <div>
              <h4>{productModal.nome}</h4>
              <p>{productModal.descricao}</p>
              <p>Porção: {productModal.porcao}</p>
              <button onClick={() => addToCart(productModal)}>
                Adicionar ao carrinho - R$ {productModal.preco.toFixed(2)}
              </button>
            </div>
            <span
              className="close-button"
              onClick={() => setModalIsOpen(false)}
            >
              X
            </span>
          </S.ModalContent>
          <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
        </S.Modal>
      )}
    </>
  )
}

export default Perfil
