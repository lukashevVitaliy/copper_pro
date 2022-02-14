import { QuantityUnits } from '../quantity-units';
import { SocialLinkCatalog } from '../social-link-catalog';

import './description-catalog-item.scss';

export const DescriptionCatalogItem = ({ product }) => {

	const { name, quantity, artikul, descriptionShort, priceOld, priceNew } = product;

	return (
		<div className="description-catalog-item">
			<h3 className="description-catalog-item__title">{name}</h3>
			<div className="description-catalog-item__block">
				{
					quantity ? <span className="description-catalog-item__availability">В наличии</span>
						: <span className="description-catalog-item__availability-none">Нет в наличии</span>
				}
				<p className="description-catalog-item__article">Артикул: <span>{artikul}</span></p>
			</div>
			<p className="description-catalog-item__subtitle">Описание</p>
			<p className="description-catalog-item__desc">{descriptionShort}</p>
			<div className="description-catalog-item__wrapper">
				<p className="description-catalog-item__text">Цена</p>
				<div className="description-catalog-item__price">
					<span className="description-catalog-item__price-new">{priceNew} грн</span>
					{priceOld ? <span className="description-catalog-item__price-old">{priceOld} грн</span> : null}
				</div>
				<QuantityUnits />
				<button className="btn">Купить</button>
			</div>
			<div className="description-catalog-item__social">
				<span className="description-catalog-item__subject">Поделиться</span>
				<SocialLinkCatalog />
			</div>
		</div>
	)
}