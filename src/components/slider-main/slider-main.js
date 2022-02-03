import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bestsellerOne from "../../resources/images/bestseller_one.png";
import './slider-main.scss';

export const SliderMain = () => {

	const settings = {
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 600,
		autoplaySpeed: 6000,
		cssEase: "linear"
	};

	return (
		<Slider {...settings}>
			<div>
				<div className="slider-main">
					<div className="slider-main__image">
						<img src={bestsellerOne} alt="bestseller" />
					</div>
					<div className="container">
						<div className="slider-main__info">
							<h1 className="slider-main__title">Хит продаж</h1>
							<p className="slider-main__desc">Дистиллятор для эфирных масел </p>
							<div className="slider-main__cost">
								<span>Цена</span>
								<span className="slider-main__cost-price">4 906 грн.</span>
							</div>
							<button className="btn">Купить</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="slider-main">
					<div className="slider-main__image">
						<img src={bestsellerOne} alt="bestseller" />
					</div>
					<div className="container">
						<div className="slider-main__info">
							<h1 className="slider-main__title">Хит продаж</h1>
							<p className="slider-main__desc">Дистиллятор для эфирных масел </p>
							<div className="slider-main__cost">
								<span>Цена</span>
								<span className="slider-main__cost-price">4 906 грн.</span>
							</div>
							<button className="btn">Купить</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="slider-main">
					<div className="slider-main__image">
						<img src={bestsellerOne} alt="bestseller" />
					</div>
					<div className="container">
						<div className="slider-main__info">
							<h1 className="slider-main__title">Хит продаж</h1>
							<p className="slider-main__desc">Дистиллятор для эфирных масел </p>
							<div className="slider-main__cost">
								<span>Цена</span>
								<span className="slider-main__cost-price">4 906 грн.</span>
							</div>
							<button className="btn">Купить</button>
						</div>
					</div>
				</div>
			</div>
		</Slider>
	)
}