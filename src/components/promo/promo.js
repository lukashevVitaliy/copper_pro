import { Link } from 'react-router-dom';

import './promo.scss';

export const Promo = () => {
	return (
		<div className="promo">
			<div className="container">
				<h2 className="promo__condition">1 + 1 = 3</h2>
				<p className="promo__desc">Закажите два товара и получите третий бесплатно</p>
				<Link to="catalog" className="btn">Перейти в каталог</Link>
			</div>
		</div>
	)
}

