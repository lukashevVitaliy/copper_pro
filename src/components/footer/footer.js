import { Link } from 'react-router-dom';

import { FooterInfo } from './info-footer/footer-info';
import { NavigateFooter } from './navigate-footer';
import { CatalogFooter } from './catalog-footer';
import { ContactsFooter } from './contacts-footer';

import './footer.scss';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__inner">
					<FooterInfo />
					<div className="footer__wrap">
						<NavigateFooter />
						<CatalogFooter />
						<ContactsFooter />
					</div>
				</div>
			</div>
		</footer>
	)
}