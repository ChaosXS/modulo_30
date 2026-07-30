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
  destaque?: boolean
  tipo: string
  avaliacao: number
  capa: string
  descricao: string
  cardapio: CardapioItem[]
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
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestauranteQuery } = api
