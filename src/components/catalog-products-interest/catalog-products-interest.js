import { SliderProducts } from '../slider-products';

import './catalog-products-interest.scss';

export const CatalogProductsInterest = () => {
	return (
		<div className="catalog-products-interest">
			<div className="container">
				<h2 className="catalog-products-interest__title">Вам также будет интересно…</h2>
				<SliderProducts />
			</div>
		</div>
	)
}