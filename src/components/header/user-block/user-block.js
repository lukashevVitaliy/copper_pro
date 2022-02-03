import { BiUser } from 'react-icons/bi';

import './user-block.scss';

export const UserBlock = () => {
	return (
		<div className="user-block">
			<BiUser
				size={30}
				className="user-block__icon"
			/>
		</div>
	)
}