import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { QuantityUnits } from '../quantity-units';
import { SocialLinkCatalog } from '../social-link-catalog';
import { setItemsInCart } from '../../store/reducers/cartSlice';

import './description-catalog-item.scss';


export const DescriptionCatalogItem = ({ product }) => {
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.stopPropagation();
		dispatch(setItemsInCart({ product, quantity }));
		navigate("/cart");
	}

	const { name, reserve, artikul, descriptionShort, priceOld, priceNew } = product;
	const totalItemNewPrice = priceNew * quantity;
	const totalItemOldPrice = priceOld * quantity;

	return (
		<div className="description-catalog-item">
			<h3 className="description-catalog-item__title">{name}</h3>
			<div className="description-catalog-item__block">
				{
					reserve ? <span className="description-catalog-item__availability">В наличии</span>
						: <span className="description-catalog-item__availability-none">Нет в наличии</span>
				}
				<p className="description-catalog-item__article">Артикул: <span>{artikul}</span></p>
			</div>
			<p className="description-catalog-item__subtitle">Описание</p>
			<p className="description-catalog-item__desc">{descriptionShort}</p>
			<div className="description-catalog-item__wrapper">
				<p className="description-catalog-item__text">Цена</p>
				<div className="description-catalog-item__price">
					<span className="description-catalog-item__price-new">{totalItemNewPrice} грн</span>
					{priceOld ? <span className="description-catalog-item__price-old">{totalItemOldPrice} грн</span> : null}
				</div>
				<QuantityUnits
					quantity={quantity}
					setQuantity={setQuantity}
				/>
				<button
					className="btn"
					onClick={handleClick}
				>Купить</button>
			</div>
			<div className="description-catalog-item__social">
				<span className="description-catalog-item__subject">Поделиться</span>
				<SocialLinkCatalog />
			</div>
		</div>
	)
}
