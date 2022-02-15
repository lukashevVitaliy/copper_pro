import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { CatalogItem } from '../../components/catalog-item';
import { CatalogDescription } from '../../components/catalog-description';
import { CatalogReviews } from '../../components/catalog-reviews';
import { CatalogProductsInterest } from '../../components/catalog-products-interest';

import './catalog-page-item.scss';

export const CatalogPageItem = () => {
	const product = useSelector(state => state.products.currentProduct);

	if (!product) return null;

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
						<Link to="/catalog/:id" className="breadcrumbs__link">{product.name}</Link>
					</li>
				</ul>
			</div>

			<CatalogItem product={product} />
			<CatalogDescription product={product} />
			<CatalogReviews />
			<CatalogProductsInterest />
		</div>
	)
}