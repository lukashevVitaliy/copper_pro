import { useEffect } from 'react';
import { useHttp } from '../../hooks/http.hooks';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

import { productsFetching, productsFetched, productsFetchingError } from '../../store/reducers/productsSlice';
import { CatalogFilters } from '../../components/catalog-filters';
import { CatalogPanel } from '../../components/catalog-panel';
import { CardItem } from '../../components/card-item';
import { Pagination } from '../../components/pagination';
import { Spinner } from '../../components/spinner';

import './catalog-page.scss';

export const CatalogPage = () => {

	const filteredProductSelector = createSelector(
		(state) => state.filters.activeFilter,
		(state) => state.filters.searchFilter,
		(state) => state.filters.sortBiPrice,
		(state) => state.products.products,

		(activeFilter, searchFilter, sortBiPrice, products) => {
			if (activeFilter) {
				return products.filter(product => product.category === activeFilter);
			} else if (searchFilter) {
				return products.filter(product => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
			} else if (sortBiPrice) {
				if (sortBiPrice.value === 'upSales') {
					const array = products.filter(product => {
						return product.priceNew;
					})
					return array.sort((a, b) => a.priceNew > b.priceNew ? 1 : -1);
				} else if (sortBiPrice.value === 'downSales') {
					const array = products.filter(product => {
						return product.priceNew;
					})
					return array.sort((a, b) => a.priceNew < b.priceNew ? 1 : -1);
				}
				return products;
			}
		}
	)

	const filteredProduct = useSelector(filteredProductSelector);

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
		return <Spinner />
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
				</ul>
				<Pagination />
			</div>
		</div>

	)
}