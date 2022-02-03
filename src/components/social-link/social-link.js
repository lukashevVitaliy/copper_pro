import { Link } from "react-router-dom";

import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

import './social-link.scss';

export const SocialLink = () => {
	return (
		<div className="social-link">
			<Link to="#">
				<FaTwitter
					size={18}
					className="social-link__icon"
				/> </Link>
			<Link to="#">
				<FaFacebookF
					size={18}
					className="social-link__icon"
				/> </Link>
			<Link to="#">
				<FaInstagram
					size={18}
					className="social-link__icon"
				/>

			</Link>
		</div>
	)
}