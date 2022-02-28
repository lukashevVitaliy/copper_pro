import { useSelector, useDispatch } from 'react-redux';

import { FaRegTrashAlt } from 'react-icons/fa';
import { deleteItemsInCart } from '../../store/reducers/cartSlice';

import './cart-items.scss';


export const CartItems = () => {
	const products = useSelector(state => state.cart.itemsInCart);
	const dispatch = useDispatch();

	return (
		<div className="cart-items">
			<div className="cart-items__titles">
				<p>Товар</p>
				<p>Количество</p>
				<p>Цена</p>
			</div>

			{
				products.length > 0 ?
					products.map(product => {
						const { id, name, thumbnail, quantity, totalPriceItemOldPrice, totalPriceItemNewPrice } = product;

						const handleDeleteClick = () => {
							dispatch(deleteItemsInCart(id))
						}

						return (
							<div className="cart-items__data" key={id}>
								<div className="cart-items__product">
									<div className="cart-items__image">
										<img src={thumbnail} alt={name} />
									</div>
									<p className="cart-items__title">
										{name}
									</p>
								</div>
								<div className="cart-items__reserve">
									<p>{quantity} шт.</p>
								</div>
								<div className="cart-items__price">
									{totalPriceItemOldPrice ? <p className="cart-items__price-old">{totalPriceItemOldPrice} грн</p> : null}
									<p className="cart-items__price-new">{totalPriceItemNewPrice} грн</p>
								</div>
								<FaRegTrashAlt
									size={18}
									className="cart-icon__trash"
									onClick={handleDeleteClick}
								/>
							</div>
						)
					}) : <h4 className="cart-items__message">Товаров нет</h4>
			}
		</div>
	)
}