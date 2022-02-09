import { QuantityUnits } from '../quantity-units';
import { SocialLinkCatalog } from '../social-link-catalog';

import './description-catalog-item.scss';

export const DescriptionCatalogItem = () => {
	return (
		<div className="description-catalog-item">
			<h3 className="description-catalog-item__title">Дистиллятор для получения гидролата 8л</h3>
			<div className="description-catalog-item__block">
				<span className="description-catalog-item__availability">В наличии</span>
				<p className="description-catalog-item__article">Артикул: <span>CP-0803</span></p>
			</div>
			<p className="description-catalog-item__subtitle">Описание</p>
			<p className="description-catalog-item__desc">Медный дистиллятор «Феникс» станет Вашим надёжным помощником и проводником в мир дистилляции и красоты, с которым Вы легко сможете получать свои любимые гидролаты или алкогольные напитки.</p>
			<div className="description-catalog-item__wrapper">
				<p className="description-catalog-item__text">Цена</p>
				<div className="description-catalog-item__price">
					<span className="description-catalog-item__price-new">10 953 грн</span>
					<span className="description-catalog-item__price-old">1 953 грн</span>
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