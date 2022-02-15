import { Link } from 'react-router-dom';

import { SliderProducts } from '../slider-products';

import './sales.scss';

export const Sales = () => {
	return (
		<div className="sales">
			<div className="container">
				<h2 className="sales__title">Скидки</h2>
				<SliderProducts />
				<Link to="catalog" className="btn btn__center">Перейти в каталог</Link>
			</div>
		</div>
	)
}