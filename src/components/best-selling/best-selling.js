import { Link } from 'react-router-dom';

import { SliderProducts } from '../slider-products';

import './best-selling.scss';

export const BestSelling = () => {
	return (
		<div className="best-selling">
			<div className="container">
				<h2 className="best-selling__title">Лучшие продажи</h2>
				<SliderProducts />
				<Link to="catalog" className="btn btn__center">Перейти в каталог</Link>
			</div>
		</div>
	)
}