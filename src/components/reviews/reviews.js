import { SliderRev } from "../slider-rev";

import './reviews.scss';

export const Reviews = () => {
	return (
		<div className="reviews">
			<h2 className="reviews__title">Что думают о нас</h2>
			<SliderRev />
		</div>
	)
}