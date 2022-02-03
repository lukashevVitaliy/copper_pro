import { Link } from 'react-router-dom';

import { SocialLink } from '../../social-link';

import './contacts-footer.scss';

export const ContactsFooter = () => {
	return (
		<div className="contacts-footer">
			<h5 className="contacts-footer__title">Контакты</h5>
			<address className="contacts-footer__address">Бажана 8-Б, Киев, 02132 Украина</address>
			<div className="contacts-footer__phone">
				<Link to="tel:+380969906756">+38 (096) 990 67 56</Link>
			</div>
			<div className="contacts-footer__email">
				<Link to="mailto:a.alambik@gmail.com">a.alambik@gmail.com</Link>
			</div>
			<SocialLink />
		</div>
	)
}