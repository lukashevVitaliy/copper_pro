import { configureStore } from "@reduxjs/toolkit";

import products from './reducers/productsSlice';
import reviews from './reducers/reviewsSlice';

const store = configureStore({
	reducer: { products, reviews },
	devTools: process.env.NODE_ENV !== 'production'
})

export default store;

