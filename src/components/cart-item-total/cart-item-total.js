import { useSelector } from 'react-redux';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { calcTotalPrice } from '../utils';

import './cart-item-total.scss';
import car from '../../resources/icons/car.svg';

export const CartItemTotal = () => {
	const product = useSelector(state => state.cart.itemsInCart);
	const totalPrice = calcTotalPrice(product);

	return (
		<div className="cart-item-total">
			<p className="cart-item-total__text">Итого</p>
			<p className="cart-item-total__total">{totalPrice} грн</p>
			<AiOutlineShoppingCart size={176} className="cart-item-total__icon" />
			<div className="cart-item-total__delivery">
				<div className="cart-item-total__image">
					<img src={car} alt="car delivery" />
				</div>
				<p className="cart-item-total__desc">У вас бесплатная доставка!</p>
			</div>
			<button className="btn btn__cart">Оформить заказ</button>
		</div>
	)
}