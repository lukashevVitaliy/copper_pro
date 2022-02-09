import { SliderProducts } from '../slider-products';

import './sales.scss';

export const Sales = () => {
	return (
		<div className="sales">
			<div className="container">
				<h2 className="sales__title">Скидки</h2>
				<SliderProducts />
				<button className="btn btn__center">Перейти в каталог</button>
			</div>
		</div>
	)
}