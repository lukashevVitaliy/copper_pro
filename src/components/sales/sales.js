import { SliderProd } from "../slider-prod";

import './sales.scss';

export const Sales = () => {
	return (
		<div className="sales">
			<h2 className="sales__title">Скидки</h2>
			<SliderProd />
			<button className="btn btn__center">Перейти в каталог</button>
		</div>
	)
}