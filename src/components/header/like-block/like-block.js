import { BsHeart } from 'react-icons/bs';

import './like-block.scss';

export const LikeBlock = () => {
	return (
		<div className="like-block">
			<BsHeart
				size={30}
				className="like-block__icon"
			/>
		</div>
	)
}