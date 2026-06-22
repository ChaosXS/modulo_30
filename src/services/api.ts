import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Definindo o tipo do produto para o TypeScript não reclamar
export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-ebac.vercel.app/' }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutosQuery } = api
