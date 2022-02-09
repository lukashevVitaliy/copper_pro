import { SliderProducts } from '../slider-products';

import './recommend.scss';

export const Recommend = () => {
	return (
		<div className="recommend">
			<div className="container">
				<h2 className="recommend__title">мы рекомендуем</h2>
				<SliderProducts />
				<button className="btn btn__center">Перейти в каталог</button>
			</div>
		</div>
	)
}