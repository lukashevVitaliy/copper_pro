import { Link } from "react-router-dom";

import logo from '../../../resources/icons/logo_Copper-Pro.svg';
import './footer-info.scss';

export const FooterInfo = () => {
	return (
		<div className="footer-info">
			<Link to="/" className="footer-info__logo">
				<img src={logo} alt="logo" />
			</Link>
			<div className="footer-info__copyright">
				<p>© 2021 “Copper Pro”</p>
				<p>Все права защищены</p>
			</div>
			<Link to='#' className="footer-info__privacy-policy">
				Политика конфиденциальности
			</Link>
		</div>
	)
}