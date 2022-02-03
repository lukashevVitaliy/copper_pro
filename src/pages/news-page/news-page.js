import { Link } from 'react-router-dom';

import { NewsItem } from '../../components/news-item';
import { Pagination } from '../../components/pagination';

import './news-page.scss';

export const NewsPage = () => {
	return (
		<div className="news-page">
			<div className="container">
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<Link to="/" className="breadcrumbs__link">Главная</Link>
					</li>
					<li className="breadcrumbs__item">
						<Link to="about" className="breadcrumbs__link">Новости</Link>
					</li>
				</ul>
				<h1 className="news-page__title">Новости</h1>
				<div className="news-page__wrap">
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
				</div>
				<Pagination />
			</div>
		</div>
	)
}