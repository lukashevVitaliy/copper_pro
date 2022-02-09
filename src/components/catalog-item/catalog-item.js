import { SliderCatalogItem } from '../slider-catalog-item';
import { DescriptionCatalogItem } from '../description-catalog-item';


import './catalog-item.scss';

export const CatalogItem = () => {
	return (
		<div className="container">
			<div className="catalog-item">
				<div className="catalog-item__slider">
					<SliderCatalogItem />
				</div>
				<div className="catalog-item__data">
					<DescriptionCatalogItem />
				</div>
			</div>
		</div>
	)
}