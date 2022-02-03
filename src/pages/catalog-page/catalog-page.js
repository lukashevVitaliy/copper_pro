import { Link } from 'react-router-dom';

import { CatalogFilters } from '../../components/catalog-filters';

import './catalog-page.scss';

export const CatalogPage = () => {
	return (
		<div className="catalog-page">
			<div className="container">
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<Link to="/" className="breadcrumbs__link">Главная</Link>
					</li>
					<li className="breadcrumbs__item">
						<Link to="about" className="breadcrumbs__link">Каталог</Link>
					</li>
				</ul>

				<h2 className="catalog-page__title">Каталог</h2>
				<CatalogFilters />
			</div>
		</div>

	)
}