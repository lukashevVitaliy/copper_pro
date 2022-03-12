import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filters: [],
	filtersLoadingStatus: 'idle',
	activeFilter: '',
	searchFilter: '',
	sortBiPrice: {}
}

const filtersProductSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		filtersFetching: state => {
			state.filtersLoadingStatus = 'loading'
		},
		filtersFetched: (state, action) => {
			state.filtersLoadingStatus = 'idle';
			state.filters = action.payload;
		},
		filtersFetchingError: state => {
			state.filtersLoadingStatus = 'error'
		},
		activeFilterChanged: (state, action) => {
			state.activeFilter = action.payload;
		},
		setSearchFilter: (state, action) => {
			state.searchFilter = action.payload;
		},
		setSortByPrice: (state, action) => {
			state.sortBiPrice = action.payload
		}
	}
})

const { actions, reducer } = filtersProductSlice;

export default reducer;

export const {
	filtersFetching,
	filtersFetched,
	filtersFetchingError,
	activeFilterChanged,
	setSearchFilter,
	setSortByPrice
} = actions;