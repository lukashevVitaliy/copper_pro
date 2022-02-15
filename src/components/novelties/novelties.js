import { Link } from 'react-router-dom';
import { SliderProducts } from '../slider-products';

import './novelties.scss';

export const Novelties = () => {
	return (
		<div className="novelties">
			<div className="container">
				<h2 className="novelties__title">новинки</h2>
				<SliderProducts />
				<Link to="catalog" className="btn btn__center">Перейти в каталог</Link>
			</div>
		</div>
	)
}