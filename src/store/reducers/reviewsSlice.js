import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	reviews: [],
	reviewsLoadingStatus: 'idle'
}

const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {
		reviewsFetching: state => {
			state.reviewsLoadingStatus = 'loading'
		},
		reviewsFetched: (state, action) => {
			state.reviewsLoadingStatus = 'idle';
			state.reviews = action.payload;
		},
		reviewsFetchingError: state => {
			state.reviewsLoadingStatus = 'error'
		}
	}
})

const { actions, reducer } = reviewsSlice;

export default reducer;

export const {
	reviewsFetching,
	reviewsFetched,
	reviewsFetchingError
} = actions;