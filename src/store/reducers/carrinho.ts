import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ItemCarrinho = {
  id: number
  nome: string
  preco: number
  imagem: string // Obrigatório para bater com o dispatch
}

const initialState: { itens: ItemCarrinho[] } = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ItemCarrinho>) => {
      const item = action.payload
      if (!state.itens.find((i) => i.id === item.id)) {
        state.itens.push(item)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
