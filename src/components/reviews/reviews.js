import { SliderReviews } from "../slider-reviews";

import './reviews.scss';

export const Reviews = () => {
	return (
		<div className="reviews">
			<div className="container">
				<h2 className="reviews__title">Что думают о нас</h2>
				<SliderReviews />
			</div>
		</div>
	)
}