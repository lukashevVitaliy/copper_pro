import { Link } from 'react-router-dom';

import './navigate-footer.scss';

export const NavigateFooter = () => {
	return (
		<div className="navigate-footer">
			<h5 className="navigate-footer__title">Навигация</h5>
			<ul className="navigate-footer__menu">
				<li className="navigate-footer__list">
					<Link to="#">Каталог</Link>
				</li>
				<li className="navigate-footer__list">
					<Link to="#">Новости</Link>
				</li>
				<li className="navigate-footer__list">
					<Link to="#">Доставка</Link>
				</li>
				<li className="navigate-footer__list">
					<Link to="#">О нас</Link>
				</li>
				<li className="navigate-footer__list">
					<Link to="#">Контакты</Link>
				</li>
			</ul>
		</div>
	)
}