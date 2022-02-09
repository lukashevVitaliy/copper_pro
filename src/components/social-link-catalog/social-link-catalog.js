import { Link } from "react-router-dom";

import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

import './social-link-catalog.scss';

export const SocialLinkCatalog = () => {
	return (
		<div className="social-link-catalog">
			<Link to="#">
				<FaTwitter
					size={18}
					className="social-link-catalog__icon"
				/> </Link>
			<Link to="#">
				<FaFacebookF
					size={18}
					className="social-link-catalog__icon"
				/> </Link>
			<Link to="#">
				<FaInstagram
					size={18}
					className="social-link-catalog__icon"
				/>
			</Link>
		</div>
	)
}