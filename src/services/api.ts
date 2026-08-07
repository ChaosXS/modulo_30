import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type CardapioItem = {
  id: number
  nome: string
  preco: number
  descricao: string
  foto: string
  porcao: string
}

export type Prato = CardapioItem

export type Restaurante = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  capa: string
  descricao: string
  cardapio: CardapioItem[]
}

export type PurchasePayload = {
  products: { id: number; price: number }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<{ orderId: string }, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetRestauranteQuery,
  usePurchaseMutation
} = api
