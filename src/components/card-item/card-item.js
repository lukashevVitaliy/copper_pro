import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsHeartFill } from 'react-icons/bs';
import classNames from 'classnames';

import { setCurrentProduct } from "../../store/reducers/productsSlice";
import './card-item.scss';


export const CardItem = ({ product }) => {
	const [active, setActive] = useState();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCurrentProduct(product));
		navigate(`${product.name}`)
		window.scroll(0, 0);
	}

	const onClickActive = () => {
		setActive(!active);
	}

	const { thumbnail, name, priceOld, priceNew, sale } = product;

	return (
		<div
			className="card-item"
		>
			<div className="card-item__image">
				<img src={thumbnail} alt={name} />
			</div>
			<div
				className="card-item__desc"
				onClick={handleClick}
			>
				<p className="card-item__text">{name}</p>
				<div className="card-item__inner">
					{priceOld ? <p className="card-item__price-old">{priceOld} грн.</p> : null}
					<p className="card-item__price-new">{priceNew} грн.</p>
				</div>
			</div>
			<button className="card-item__like">
				<BsHeartFill
					size={30}
					className={classNames("card-item__like-icon", { "card-item__like-icon active": active, "active-small": active })}
					onClick={onClickActive}
				/>
			</button>
			{sale ? <span className="card-item__sale">Sale</span> : null}
		</div>
	)
}