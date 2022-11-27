import { createSlice } from "@reduxjs/toolkit";
import { original } from 'immer'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        total: 0,

        favorite: []
    },
    reducers: {
        addProduct: (state, action) => {
            // state.Quantity += 1
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
        },
        removeFromCart: (state, action) => {
            const DoSo = state.products.splice(state.products.find(product => product.ID === action.payload), 1)
            console.log(DoSo)
        },
        addFavorite: (state, action) => {
            state.favorite.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
        },
    }
})
export const { addProduct, removeFromCart, addFavorite } = cartSlice.actions
export default cartSlice.reducer;

