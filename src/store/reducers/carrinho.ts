import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurante } from '../../services/api'

// Definimos que o item é UM elemento do cardápio
type PedidoItem = Restaurante['cardapio'][number]

type CarrinhoState = {
  itens: PedidoItem[] // Agora é uma lista simples de itens
  isOpen: boolean
}

const initialState: CarrinhoState = {
  itens: [],
  isOpen: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<PedidoItem>) => {
      state.itens.push(action.payload)
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    limpar: (state) => {
      state.itens = []
    }
  }
})

export const { adicionar, remover, setOpen, limpar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
