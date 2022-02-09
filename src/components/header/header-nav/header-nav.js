import { Link } from 'react-router-dom';

import './header-nav.scss';

export const HeaderNav = () => {
	return (
		<nav className="header-nav">
			<ul className="header-nav__list">
				<li className="header-nav__list-link">
					<Link to="catalog">Каталог</Link>
				</li>
				<li className="header-nav__list-link">
					<Link to="news">Новости</Link>
				</li>
				<li className="header-nav__list-link">
					<Link to="delivery">Доставка</Link>
				</li>
				<li className="header-nav__list-link">
					<Link to="about">О нас</Link>
				</li>
				<li className="header-nav__list-link">
					<Link to="contacts">Контакты</Link>
				</li>
			</ul>
		</nav>
	)
}