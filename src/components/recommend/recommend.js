import { Link } from 'react-router-dom';

import { SliderProducts } from '../slider-products';

import './recommend.scss';

export const Recommend = () => {
	return (
		<div className="recommend">
			<div className="container">
				<h2 className="recommend__title">мы рекомендуем</h2>
				<SliderProducts />
				<Link to="catalog" className="btn btn__center">Перейти в каталог</Link>
			</div>
		</div>
	)
}