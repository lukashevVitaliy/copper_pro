import { SliderProducts } from '../slider-products';

import './best-selling.scss';

export const BestSelling = () => {
	return (
		<div className="best-selling">
			<div className="container">
				<h2 className="best-selling__title">Лучшие продажи</h2>
				<SliderProducts />
				<button className="btn btn__center">Перейти в каталог</button>
			</div>
		</div>
	)
}