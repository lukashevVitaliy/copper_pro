import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	itemsInCart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItemsInCart: (state, action) => {
			state.itemsInCart.push(action.payload);
		},
		deleteItemsInCart: (state, action) => {
			state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload);
		}
	}
})

const { actions, reducer } = cartSlice;

export default reducer;

export const {
	setItemsInCart,
	deleteItemsInCart
} = actions;