import { SliderReviews } from '../slider-reviews';

import './catalog-reviews.scss';

export const CatalogReviews = () => {
	return (
		<div className="container">
			<div className="catalog-reviews">
				<div className="catalog-reviews__block">
					<h3 className="catalog-reviews__title">Отзывы</h3>
					<button className="btn">Оставить отзыв</button>
				</div>
				<SliderReviews />
			</div>
		</div>
	)
}