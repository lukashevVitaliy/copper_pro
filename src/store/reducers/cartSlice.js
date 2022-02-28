import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	itemsInCart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItemsInCart: (state, action) => {

			const itemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.product.id);

			if (itemIndex >= 0) {
				const itemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.product.id);

				state.itemsInCart[itemIndex].quantity += action.payload.quantity;
				state.itemsInCart[itemIndex].totalPriceItemOldPrice += state.itemsInCart[itemIndex].totalPriceItemOldPrice * action.payload.quantity;
				state.itemsInCart[itemIndex].totalPriceItemNewPrice += state.itemsInCart[itemIndex].totalPriceItemNewPrice * action.payload.quantity;

			} else {
				state.itemsInCart.push({
					id: action.payload.product.id,
					thumbnail: action.payload.product.thumbnail,
					name: action.payload.product.name,
					quantity: action.payload.quantity,
					totalPriceItemOldPrice: action.payload.quantity * action.payload.product.priceOld,
					totalPriceItemNewPrice: action.payload.quantity * action.payload.product.priceNew
				});
			}
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