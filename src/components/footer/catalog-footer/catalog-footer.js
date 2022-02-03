import { Link } from "react-router-dom";

import './catalog-footer.scss';

export const CatalogFooter = () => {
	return (
		<div className="catalog-footer">
			<h5 className="catalog-footer__title">Каталог</h5>
			<ul className="catalog-footer__menu">
				<li className="catalog-footer__list">
					<Link to="#">Для эфирных масел</Link>
				</li>
				<li className="catalog-footer__list">
					<Link to="#">Для гидролатов</Link>
				</li>
				<li className="catalog-footer__list">
					<Link to="#">Медная посуда</Link>
				</li>
				<li className="catalog-footer__list">
					<Link to="#">Аксессуары из меди</Link>
				</li>
				<li className="catalog-footer__list">
					<Link to="#">Индивидуальный заказ</Link>
				</li>
				<li className="catalog-footer__list">
					<Link to="#">Скидки и предложения</Link>
				</li>
			</ul>
		</div>
	)
}