import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	productsLoadingStatus: 'idle',
	currentProduct: {}
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		productsFetching: state => {
			state.productsLoadingStatus = 'loading'
		},
		productsFetched: (state, action) => {
			state.productsLoadingStatus = 'idle';
			state.products = action.payload;
		},
		productsFetchingError: state => {
			state.productsLoadingStatus = 'error';
		},
		setCurrentProduct: (state, action) => {
			state.currentProduct = action.payload;
		}
	}
})

const { actions, reducer } = productsSlice;

export default reducer;

export const {
	productsFetching,
	productsFetched,
	productsFetchingError,
	setCurrentProduct
} = actions;