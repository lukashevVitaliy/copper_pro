import { SliderProd } from "../slider-prod";

import './novelties.scss';

export const Novelties = () => {
	return (
		<div className="novelties">
			<h2 className="novelties__title">новинки</h2>
			<SliderProd />
			<button className="btn btn__center">Перейти в каталог</button>
		</div>
	)
}