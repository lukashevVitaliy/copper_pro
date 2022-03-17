import { useSelector } from 'react-redux';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import './cart-block.scss';

export const CartBlock = () => {
	const items = useSelector(state => state.cart.itemsInCart);

	return (
		<div className="cart-block">
			<div className="cart-block__quantity">
				{items == 0 ? null : <span>{items.reduce((acc, itemsInCart) => acc += itemsInCart.quantity, 0)}</span>}
			</div>

			<AiOutlineShoppingCart
				size={28}
				className="cart-block__icon"
			/>
		</div>
	)
}