import { configureStore } from "@reduxjs/toolkit";

import products from './reducers/productsSlice';
import reviews from './reducers/reviewsSlice';
import cart from './reducers/cartSlice';
import filters from './reducers/filtersProductSlice';

const store = configureStore({
	reducer: { products, reviews, cart, filters },
	devTools: process.env.NODE_ENV !== 'production'
})

export default store;

