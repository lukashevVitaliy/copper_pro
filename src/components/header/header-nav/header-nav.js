import './header-nav.scss';

export const HeaderNav = () => {
	return (
		<nav className="header-nav">
			<ul className="header-nav__list">
				<li className="header-nav__list-link"><a href="#">Каталог</a></li>
				<li className="header-nav__list-link"><a href="#">Новости</a></li>
				<li className="header-nav__list-link"><a href="#">Доставка</a></li>
				<li className="header-nav__list-link"><a href="#">О нас</a></li>
				<li className="header-nav__list-link"><a href="#">Контакты</a></li>
			</ul>
		</nav>
	)
}