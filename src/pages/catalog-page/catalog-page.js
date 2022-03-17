import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

import { CatalogFilters } from '../../components/catalog-filters';
import { CatalogPanel } from '../../components/catalog-panel';
import { CatalogList } from '../../components/catalog-list';
import { Pagination } from '../../components/pagination';
// import { PaginationRounded } from '../../components/pagination-catalog';

import './catalog-page.scss';


export const CatalogPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(6);

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
				} else {
					return products;
				}
			} else {
				return products;
			}
		}
	)

	const filteredProduct = useSelector(filteredProductSelector);

	// определяем индексы первой и последней страниц
	const lastProductsIndex = currentPage * productsPerPage;
	const firstProductsIndex = lastProductsIndex - productsPerPage;
	// текущая страница
	const currentProductPage = filteredProduct.slice(firstProductsIndex, lastProductsIndex);
	// всего товаров
	const totalProducts = filteredProduct.length;
	// переход по страницам
	const paginate = pageNumber => setCurrentPage(pageNumber);
	// активация стрелок prev, next страниц
	const totalPage = totalProducts / productsPerPage;
	let nextPage, prevPage;

	if (currentPage < totalPage) {
		nextPage = () => setCurrentPage(currentPage => currentPage + 1);
	}

	if (currentPage > 1) {
		prevPage = () => setCurrentPage(currentPage => currentPage - 1);
	}


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
				<CatalogList
					filteredProduct={currentProductPage}
				/>
				<Pagination
					productsPerPage={productsPerPage}
					totalProducts={totalProducts}
					paginate={paginate}
					nextPage={nextPage}
					prevPage={prevPage}
				/>

				{/* <PaginationRounded
					productsPerPage={productsPerPage}
					totalProducts={totalProducts}
					paginate={paginate}
				/> */}
			</div>
		</div>

	)
}