import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	productsLoadingStatus: 'idle',
	currentProduct: {},

	currentPage: 1,
	perPage: 9,
	totalCount: 0
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
			state.totalCount = action.payload.total_count;
		},


		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		}
	}
})

const { actions, reducer } = productsSlice;

export default reducer;

export const {
	productsFetching,
	productsFetched,
	productsFetchingError,
	setCurrentProduct,

	setCurrentPage
} = actions;