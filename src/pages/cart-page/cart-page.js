import { Link } from 'react-router-dom';

import { CartItems } from '../../components/cart-items';
import { CartItemTotal } from '../../components/cart-item-total';

import './cart-page.scss';

export const CartPage = () => {
	return (
		<div className="cart-page">
			<div className="container">
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<Link to="/" className="breadcrumbs__link">Главная</Link>
					</li>
					<li className="breadcrumbs__item">
						<Link to="/cart" className="breadcrumbs__link">Корзина</Link>
					</li>
				</ul>

				<h2 className="cart-page__title">Корзина</h2>
				<div className="cart-page__wrapper">
					<div className="cart-page__left">
						<CartItems />
					</div>
					<div className="cart-page__right">
						<CartItemTotal />
					</div>
				</div>
				<Link to="/catalog" className="cart-page__link" >Назад к покупкам</Link>
			</div>
		</div>
	)
}