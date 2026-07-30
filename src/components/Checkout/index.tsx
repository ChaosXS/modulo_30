import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootState } from '../../store'
import { setOpen, remover, limpar } from '../../store/reducers/carrinho'

import * as S from './styles'

type ProductItem = {
  id: number
  nome: string
  preco: number
  foto: string
}

const Checkout = () => {
  const { isOpen, itens } = useSelector((state: RootState) => state.carrinho)
  const dispatch = useDispatch()

  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart')
  const [orderData, setOrderData] = useState<{ orderId: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const closeCart = () => {
    dispatch(setOpen(false))
  }

  const removeItem = (id: number) => {
    dispatch(remover(id))
  }

  const totalPrice = itens.reduce((acc: number, current: ProductItem) => {
    return (acc += current.preco)
  }, 0)

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string().required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      cardOwner: Yup.string().required('Campo obrigatório'),
      cardNumber: Yup.string().required('Campo obrigatório'),
      cardCode: Yup.string().required('Campo obrigatório'),
      expiresMonth: Yup.string().required('Campo obrigatório'),
      expiresYear: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      try {
        const response = await fetch(
          'https://api-ebac.vercel.app/api/efood/checkout',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              products: itens.map((item: ProductItem) => ({
                id: item.id,
                price: item.preco
              })),
              delivery: {
                receiver: values.receiver,
                address: {
                  description: values.address,
                  city: values.city,
                  zipCode: values.zipCode,
                  number: Number(values.number),
                  complement: values.complement
                }
              },
              payment: {
                card: {
                  name: values.cardOwner,
                  number: values.cardNumber,
                  code: Number(values.cardCode),
                  expires: {
                    month: Number(values.expiresMonth),
                    year: Number(values.expiresYear)
                  }
                }
              }
            })
          }
        )

        const data = await response.json()
        setOrderData(data)
        setStep('success')
        dispatch(limpar())
      } catch (error) {
        alert('Erro ao processar o pedido. Tente novamente.')
      } finally {
        setIsLoading(false)
      }
    }
  })

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {step === 'cart' && (
          <>
            {itens.length > 0 ? (
              <>
                <ul>
                  {itens.map((item: ProductItem) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>R$ {item.preco.toFixed(2)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.Prices>
                  <span>Valor total</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </S.Prices>
                <button
                  onClick={() => setStep('checkout')}
                  type="button"
                  className="button-checkout"
                >
                  Continuar com a entrega
                </button>
              </>
            ) : (
              <p className="empty-text">
                O carrinho está vazio, adicione itens para continuar
              </p>
            )}
          </>
        )}

        {step === 'checkout' && (
          <form onSubmit={form.handleSubmit}>
            <h2>Entrega</h2>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              type="text"
              id="receiver"
              name="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            <div>
              <div>
                <label htmlFor="zipCode">CEP</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
            </div>

            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              id="complement"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            <h2>Pagamento</h2>
            <label htmlFor="cardOwner">Nome do cartão</label>
            <input
              type="text"
              id="cardOwner"
              name="cardOwner"
              value={form.values.cardOwner}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            <div>
              <div>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="cardCode">CVV</label>
                <input
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  type="text"
                  id="expiresMonth"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  type="text"
                  id="expiresYear"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
            </div>

            <button
              type="submit"
              className="button-checkout"
              disabled={isLoading}
            >
              {isLoading ? 'Enviando pedido...' : 'Finalizar pagamento'}
            </button>
            <button
              type="button"
              className="button-checkout"
              onClick={() => setStep('cart')}
            >
              Voltar para o carrinho
            </button>
          </form>
        )}

        {step === 'success' && orderData && (
          <S.ConfirmationContainer>
            <h2>Pedido realizado - {orderData.orderId}</h2>
            <p>
              Estamos preparando sua entrega. Em breve o entregador estará a
              caminho do endereço cadastrado.
            </p>
            <p>Lembre-se de higienizar as mãos após o recebimento do pedido.</p>
            <button
              type="button"
              className="button-checkout"
              onClick={() => {
                setStep('cart')
                closeCart()
              }}
            >
              Concluir
            </button>
          </S.ConfirmationContainer>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Checkout
