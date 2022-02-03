import { AiOutlineShoppingCart } from 'react-icons/ai';

import './cart-block.scss';

export const CartBlock = () => {
	return (
		<div className="cart-block">
			<div className="cart-block__quantity">
				<span>1</span>
			</div>

			<AiOutlineShoppingCart
				size={28}
				className="cart-block__icon"
			/>
		</div>
	)
}