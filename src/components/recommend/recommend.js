import { SliderProd } from "../slider-prod";

import './recommend.scss';

export const Recommend = () => {
	return (
		<div className="recommend">
			<h2 className="recommend__title">мы рекомендуем</h2>
			<SliderProd />
			<button className="btn btn__center">Перейти в каталог</button>
		</div>
	)
}