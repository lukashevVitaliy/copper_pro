import { SocialLinkCatalog } from '../../components/social-link-catalog';

import './share.scss';

export const Share = () => {
	return (
		<div className="share">
			<span>Поделиться</span>
			<SocialLinkCatalog />
		</div>
	)
}