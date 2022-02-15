import React from "react";
import { Link } from "react-router-dom";

import { HeaderNav } from './header-nav';
import { LikeBlock } from './like-block';
import { UserBlock } from './user-block';
import { CartBlock } from './cart-block';


import logo from '../../resources/icons/logo_Copper-Pro.svg';
import './header.scss';

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<div className="header__wrap">
						<Link to="/" className="header__logo">
							<img src={logo} alt="logo" />
						</Link>
						<HeaderNav />
					</div>
					<div className="header__info">
						<Link to="#" style={{ color: "#031412" }}><LikeBlock /></Link>
						<Link to="#" style={{ color: "#031412" }}><UserBlock /></Link>
						<Link to="cart" style={{ color: "#031412" }}><CartBlock /></Link>
					</div>
				</div>
			</div>
		</header>
	)
}

