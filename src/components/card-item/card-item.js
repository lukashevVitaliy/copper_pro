import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsHeart } from 'react-icons/bs';

import { setCurrentProduct } from "../../store/reducers/productsSlice";
import './card-item.scss';


export const CardItem = ({ product }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCurrentProduct(product));
		navigate(`${product.name}`)
	}

	const { thumbnail, name, priceOld, priceNew, sale } = product;

	return (
		<div
			className="card-item"
			onClick={handleClick}
		>
			<div className="card-item__image">
				<img src={thumbnail} alt={name} />
			</div>
			<div className="card-item__desc">
				<p className="card-item__text">{name}</p>
				<div className="card-item__inner">
					{priceOld ? <p className="card-item__price-old">{priceOld} грн.</p> : null}
					<p className="card-item__price-new">{priceNew} грн.</p>
				</div>
			</div>
			<button className="card-item__like">
				<BsHeart
					size={30}
					className="card-item__like-icon"
				/>
			</button>
			{sale ? <span className="card-item__sale">Sale</span> : null}
		</div>
	)
}