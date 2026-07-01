// 1. A falta desta importação causava os erros TS2304 (createApi e fetchBaseQuery não encontrados)
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// 2. Exportando o tipo Produto para resolver o erro TS2305 no componente Produto/index.tsx
export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

// Definição do tipo Restaurante para o projeto efood
export type Restaurante = {
  id: number
  titulo: string
  capa: string
  avaliacao: number
  descricao: string
  tipo: string
  cardapio: any[]
}

export const api = createApi({
  reducerPath: 'api', // Identificador do repositório da camada de dados [1, 3]
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    // Ao importar o createApi corretamente, o 'builder' deixará de ter erro de tipo 'any' [1, 4]
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    // Adicionado getProdutos para manter compatibilidade com componentes que buscam 'Produto'
    getProdutos: builder.query<Produto[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetRestaurantesQuery, useGetProdutosQuery } = api
