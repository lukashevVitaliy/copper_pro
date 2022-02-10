import { Link } from 'react-router-dom';

import sleep from '../../resources/images/news/news-sleep.jpg';
import './news-item.scss';

export const NewsItem = () => {
	return (
		<Link to="#" className="news-item">
			<div className="news-item__image">
				<img src={sleep} alt="Эфирные масла для улучшения сна" />
			</div>
			<p className="news-item__title">Эфирные масла для улучшения сна</p>
			<span className="news-item__data">27.10.21</span>
			<p className="news-item__desc">
				Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил....
			</p>
			<p className="news-item__link">Читать больше</p>
		</Link>
	)
}