import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHttp } from '../../hooks/http.hooks';
import { productsFetching, productsFetched, productsFetchingError } from '../../store/reducers/productsSlice';
import { CardItem } from '../../components/card-item';
import { Spinner } from '../../components/spinner';

import './catalog-list.scss';

export const CatalogList = ({ filteredProduct }) => {

	const { productsLoadingStatus } = useSelector(state => state.products.productsLoadingStatus);
	const dispatch = useDispatch();
	const { request } = useHttp();

	useEffect(() => {
		dispatch(productsFetching());
		request("http://localhost:3001/products")
			.then(data => dispatch(productsFetched(data)))
			.catch(() => productsFetchingError())
		// eslint-disable-next-line
	}, [])

	if (productsLoadingStatus === 'loading') {
		return <h5 className="error">Загрузка данных...</h5>
	} else if (productsLoadingStatus === 'error') {
		return <h5 className="error">Ошибка загрузки данных...</h5>
	}

	const renderProductsList = (arr) => {
		if (arr.length === 0) {
			return <h5 className="message">Товар отсутствует...</h5>
		}

		return arr.map(product => {
			return (
				<CardItem key={product.id} product={product} />
			)
		})
	}

	const elements = renderProductsList(filteredProduct);

	return (
		<ul className="catalog-list">
			{elements}
		</ul>
	)
}