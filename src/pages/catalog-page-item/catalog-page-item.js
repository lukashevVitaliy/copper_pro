import { Link } from 'react-router-dom';

import { CatalogItem } from '../../components/catalog-item';
import { CatalogDescription } from '../../components/catalog-description';
import { CatalogReviews } from '../../components/catalog-reviews';
import { CatalogProductsInterest } from '../../components/catalog-products-interest';

import './catalog-page-item.scss';

export const CatalogPageItem = () => {
	return (
		<div className="catalog-page-item">
			<div className="container">
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<Link to="/" className="breadcrumbs__link">Главная</Link>
					</li>
					<li className="breadcrumbs__item">
						<Link to="/catalog" className="breadcrumbs__link">Каталог</Link>
					</li>
					<li className="breadcrumbs__item">
						<Link to="/catalog/:id" className="breadcrumbs__link">Дистиллятор для получения гидролата 8л</Link>
					</li>
				</ul>
			</div>

			<CatalogItem />
			<CatalogDescription />
			<CatalogReviews />
			<CatalogProductsInterest />
		</div>
	)
}