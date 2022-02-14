import { SliderCatalogItem } from '../slider-catalog-item';
import { DescriptionCatalogItem } from '../description-catalog-item';


import './catalog-item.scss';

export const CatalogItem = ({ product }) => {
	return (
		<div className="container">
			<div className="catalog-item">
				<div className="catalog-item__slider">
					<SliderCatalogItem product={product} />
				</div>
				<div className="catalog-item__data">
					<DescriptionCatalogItem product={product} />
				</div>
			</div>
		</div>
	)
}