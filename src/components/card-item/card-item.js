import { BsHeart } from 'react-icons/bs';

import EssentialOils from '../../resources/images/OurProduction/essential-oils.png';
import './card-item.scss';

export const CardItem = () => {
	return (
		<div className="card-item">
			<div className="card-item__image">
				<img src={EssentialOils} alt="Медный чайник с фарфоровой ручкой" />
			</div>
			<div className="card-item__desc">
				<p className="card-item__text">Медный чайник с фарфоровой ручкой</p>
				<div className="card-item__inner">
					<p className="card-item__price-old">2 000 грн.</p>
					<p className="card-item__price-new">1 953 грн.</p>
				</div>
			</div>
			<button className="card-item__like">
				<BsHeart
					size={30}
					className="card-item__like-icon"
				/>
			</button>
			<span className="card-item__sale">Sale</span>
		</div>
	)
}