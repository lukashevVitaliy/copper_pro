import { Link } from 'react-router-dom';

import { CatalogFilters } from '../../components/catalog-filters';
import { CatalogPanel } from '../../components/catalog-panel';
import { CardItem } from '../../components/card-item';
import { Pagination } from '../../components/pagination';

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
				<CatalogPanel />
				<div className="catalog-page__wrap">
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
				</div>
				<Pagination />
			</div>
		</div>

	)
}