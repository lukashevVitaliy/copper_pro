import { Link } from 'react-router-dom';

import signature from '../../resources/images/about/signature.png';
import hydrolateAbout from '../../resources/images/about/hydrolate-about.jpg';
import './about.scss';

export const About = () => {
	return (
		<div className="about">
			<div className="container">
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<Link to="/" className="breadcrumbs__link">Главная</Link>
					</li>
					<li className="breadcrumbs__item">
						<Link to="about" className="breadcrumbs__link">О нас</Link>
					</li>
				</ul>
				<div className="about__info">
					<h1 className="about__title">О нас</h1>
					<p className="about__text">" Мы любим все, что сделано из меди "</p>
					<div className="about__requisites">
						<span className="about__name">Иван Иванов</span>
						<span className="about__signature">
							<img src={signature} alt="signature" />
						</span>
					</div>
				</div>
			</div>
			<div className="about__hydrolate">
				<img src={hydrolateAbout} alt="hydrolate" />
			</div>
		</div>
	)
}