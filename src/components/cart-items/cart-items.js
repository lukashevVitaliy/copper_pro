import { FaRegTrashAlt } from 'react-icons/fa';

import './cart-items.scss';
import product from '../../resources/images/OurProduction/hydrolate.png';

export const CartItems = () => {
	return (
		<div className="cart-items">
			<div className="cart-items__titles">
				<p>Товар</p>
				<p>Количество</p>
				<p>Цена</p>
			</div>

			<div className="cart-items__data">
				<div className="cart-items__product">
					<div className="cart-items__image">
						<img src={product} alt="product" />
					</div>
					<p className="cart-items__title">
						Дистиллятор для получения гидролата 8л
					</p>
				</div>
				<div className="cart-items__quantity">
					<p>2 шт.</p>
				</div>
				<div className="cart-items__price">
					<p className="cart-items__price-old">1 953 грн</p>
					<p className="cart-items__price-new">5 000 грн</p>
				</div>
				<FaRegTrashAlt size={18} className="cart-icon__trash" />
			</div>

			<div className="cart-items__data">
				<div className="cart-items__product">
					<div className="cart-items__image">
						<img src={product} alt="product" />
					</div>
					<p className="cart-items__title">
						Дистиллятор для получения гидролата 8л
					</p>
				</div>
				<div className="cart-items__quantity">
					<p>2 шт.</p>
				</div>
				<div className="cart-items__price">
					<p className="cart-items__price-old">1 953 грн</p>
					<p className="cart-items__price-new">5 000 грн</p>
				</div>
				<FaRegTrashAlt size={18} className="cart-icon__trash" />
			</div>
		</div>
	)
}