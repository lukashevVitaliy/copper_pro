import { Link } from 'react-router-dom';

import { SliderNews } from '../../components/slider-news';
import { Share } from '../../components/share';

import './news-item-page.scss';

export const NewsItemPage = () => {
	return (
		<div className="news-item-page">
			<div className="container">
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<Link to="/" className="breadcrumbs__link">Главная</Link>
					</li>
					<li className="breadcrumbs__item">
						<Link to="/news" className="breadcrumbs__link">Новости</Link>
					</li>
					<li className="breadcrumbs__item">
						<Link to="/news/:id" className="breadcrumbs__link">Эфирные масла для улучшения сна</Link>
					</li>
				</ul>

				<div className="news-item-page__box">
					<h2 className="news-item-page__title">Эфирные масла для улучшения сна</h2>
					<Share />
				</div>
				<SliderNews />
			</div>
		</div>
	)
}