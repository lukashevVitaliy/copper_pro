import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useHttp } from '../../hooks/http.hooks';
import {
	filtersFetching,
	filtersFetched,
	filtersFetchingError,
	activeFilterChanged,
} from '../../store/reducers/filtersProductSlice';

import './catalog-filters.scss';


export const CatalogFilters = () => {
	const { filters, filtersLoadingStatus } = useSelector(state => state.filters);
	const dispatch = useDispatch();
	const { request } = useHttp();

	useEffect(() => {
		dispatch(filtersFetching());
		request("http://localhost:3001/filters")
			.then(data => dispatch(filtersFetched(data)))
			.catch(() => filtersFetchingError())
	}, [])

	if (filtersLoadingStatus === 'loading') {
		return <h5 className="loading">Загрузка данных...</h5>
	} else if (filtersLoadingStatus === 'error') {
		return <h5 className="error">Ошибка загрузки данных...</h5>
	}

	const renderFilters = (arr) => {

		if (arr.length === 0) {
			return <h5 className="text-center mt-5">Фильтры не найдены</h5>
		}

		return arr.map(({ name, label, thumbnail }) => {
			return (
				<button
					className="catalog-filters__item"
					id={name}
					key={name}
					onClick={() => dispatch(activeFilterChanged(name))}
				>
					<div className="catalog-filters__image">
						<img src={thumbnail} alt={label} />
					</div>
					<span className="catalog-filters__text">{label}</span>
				</button>
			)
		})
	}

	const elements = renderFilters(filters);

	return (
		<div className="catalog-filters">
			{elements}
		</div>
	)
}