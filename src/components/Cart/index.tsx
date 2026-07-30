import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { remover, setOpen } from '../../store/reducers/carrinho'

import * as S from './styles'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootState) => state.carrinho)
  const dispatch = useDispatch()

  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'success'>(
    'cart'
  )

  const [receiver, setReceiver] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  const [cardOwner, setCardOwner] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [expiresMonth, setExpiresMonth] = useState('')
  const [expiresYear, setExpiresYear] = useState('')

  const closeCart = () => {
    dispatch(setOpen(false))
    setStep('cart')
  }

  const removeItem = (id: number) => {
    dispatch(remover(id))
  }

  const getTotalPrice = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const proceedToDelivery = () => {
    if (itens.length === 0) return
    setStep('delivery')
  }

  const proceedToPayment = () => {
    if (!receiver || !address || !city || !zipCode || !number) {
      alert('Por favor, preencha todos os campos de endereço obrigatórios.')
      return
    }
    setStep('payment')
  }

  const finishOrder = () => {
    if (
      !cardOwner ||
      !cardNumber ||
      !cardCvv ||
      !expiresMonth ||
      !expiresYear
    ) {
      alert('Por favor, preencha todos os dados do cartão.')
      return
    }
    setStep('success')
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {step === 'cart' && (
          <>
            {itens.length > 0 ? (
              <>
                <ul>
                  {itens.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>R$ {item.preco.toFixed(2)}</span>
                      </div>
                      <button type="button" onClick={() => removeItem(item.id)}>
                        🗑️
                      </button>
                    </S.CartItem>
                  ))}
                </ul>
                <S.Prices>
                  <p>Valor total</p>
                  <p>R$ {getTotalPrice().toFixed(2)}</p>
                </S.Prices>
                <S.Button onClick={proceedToDelivery}>
                  Continuar com a entrega
                </S.Button>
              </>
            ) : (
              <p className="empty-text">
                O carrinho está vazio, adicione algum prato para continuar
              </p>
            )}
          </>
        )}

        {step === 'delivery' && (
          <>
            <h3>Entrega</h3>
            <S.InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                type="text"
                id="receiver"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <input
                  type="text"
                  id="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  type="text"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </S.InputGroup>
            </S.Row>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </S.InputGroup>

            <S.Button onClick={proceedToPayment}>
              Continuar com o pagamento
            </S.Button>
            <S.Button onClick={() => setStep('cart')}>
              Voltar para o carrinho
            </S.Button>
          </>
        )}

        {step === 'payment' && (
          <>
            <h3>Pagamento - Valor a pagar R$ {getTotalPrice().toFixed(2)}</h3>
            <S.InputGroup>
              <label htmlFor="cardOwner">Nome no cartão</label>
              <input
                type="text"
                id="cardOwner"
                value={cardOwner}
                onChange={(e) => setCardOwner(e.target.value)}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="cardCvv">CVV</label>
                <input
                  type="text"
                  id="cardCvv"
                  value={cardCvv}
                  onChange={(e) => setCardCvv(e.target.value)}
                />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  type="text"
                  id="expiresMonth"
                  value={expiresMonth}
                  onChange={(e) => setExpiresMonth(e.target.value)}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  type="text"
                  id="expiresYear"
                  value={expiresYear}
                  onChange={(e) => setExpiresYear(e.target.value)}
                />
              </S.InputGroup>
            </S.Row>

            <S.Button onClick={finishOrder}>Finalizar pagamento</S.Button>
            <S.Button onClick={() => setStep('delivery')}>
              Voltar para a edição de endereço
            </S.Button>
          </>
        )}

        {step === 'success' && (
          <>
            <h3>Pedido realizado com sucesso!</h3>
            <p>
              Estamos felizes em informar que seu pedido já está sendo
              processado e será entregue em breve.
            </p>
            <p>
              Lembre-se de que a higienização das mãos é importante antes de
              saborear sua refeição!
            </p>
            <p style={{ marginTop: '16px' }}>Obrigado pela preferência!</p>

            <S.Button
              onClick={() => {
                dispatch(setOpen(false))
                setStep('cart')
              }}
              style={{ marginTop: '24px' }}
            >
              Concluir
            </S.Button>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
