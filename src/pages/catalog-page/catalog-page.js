import { useEffect } from 'react';
import { useHttp } from '../../hooks/http.hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { productsFetching, productsFetched, productsFetchingError } from '../../store/reducers/productsSlice';
import { CatalogFilters } from '../../components/catalog-filters';
import { CatalogPanel } from '../../components/catalog-panel';
import { CardItem } from '../../components/card-item';
import { Pagination } from '../../components/pagination';
import { Spinner } from '../../components/spinner';

import './catalog-page.scss';

export const CatalogPage = () => {
	const { products, productsLoadingStatus } = useSelector(state => state.products);
	const dispatch = useDispatch();
	const { request } = useHttp();

	useEffect(() => {
		dispatch(productsFetching);
		request("http://localhost:3001/data?limit=3")
			// .then(data => console.log(data.products))
			.then(data => dispatch(productsFetched(data.products)))
			.catch(() => productsFetchingError())
		// eslint-disable-next-line
	}, [])

	if (productsLoadingStatus === 'loading') {
		return <Spinner />
	} else if (productsLoadingStatus === 'error') {
		return <h5 className="catalog-page__error">Ошибка загрузки данных...</h5>
	}

	const renderProductsList = (arr) => {
		if (arr.length === 0) {
			return <h5 className="catalog-page__message">Товар отсутствует...</h5>
		}

		return arr.map(product => {
			return (
				<CardItem key={product.id} product={product} />
			)
		})
	}

	const elements = renderProductsList(products);
	console.log(elements);

	return (
		<div className="catalog-page">
			<div className="container">
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<Link to="/" className="breadcrumbs__link">Главная</Link>
					</li>
					<li className="breadcrumbs__item">
						<Link to="/catalog" className="breadcrumbs__link">Каталог</Link>
					</li>
				</ul>

				<h2 className="catalog-page__title">Каталог</h2>
				<CatalogFilters />
				<CatalogPanel />
				<ul className="catalog-page__wrap">
					{elements}
					{/* <CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem /> */}
				</ul>
				<Pagination />
			</div>
		</div>

	)
}