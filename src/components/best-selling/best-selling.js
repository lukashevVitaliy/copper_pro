import { SliderProd } from '../slider-prod';

import './best-selling.scss';

export const BestSelling = () => {
	return (
		<div className="best-selling">
			<h2 className="best-selling__title">Лучшие продажи</h2>
			<SliderProd />
			<button className="btn btn__center">Перейти в каталог</button>
		</div>
	)
}