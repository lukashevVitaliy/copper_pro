import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsHeart } from 'react-icons/bs';

import EssentialOils from '../../resources/images/OurProduction/essential-oils.png';
import Hydrolate from '../../resources/images/OurProduction/hydrolate.png';
import CopperUtensils from '../../resources/images/OurProduction/copper-utensils.png';

import './slider-prod.scss';

export const SliderProd = () => {
	const settings = {
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 600,
		autoplaySpeed: 6000,
		cssEase: "linear"
	};

	return (
		<div className="slider-prod">
			<Slider {...settings}>
				<div className="slider-prod__item">
					<div className="slider-prod__image">
						<img src={EssentialOils} alt="Медный чайник с фарфоровой ручкой" />
					</div>
					<div className="slider-prod__desc">
						<p className="slider-prod__text">Медный чайник с фарфоровой ручкой</p>
						<div className="slider-prod__inner">
							<p className="slider-prod__price-old">2 000 грн.</p>
							<p className="slider-prod__price-new">1 953 грн.</p>
						</div>
					</div>
					<button className="slider-prod__like">
						<BsHeart
							size={30}
							className="slider-prod__like-icon"
						/>
					</button>
					<span className="slider-prod__sale">Sale</span>
				</div>
				<div className="slider-prod__item">
					<div className="slider-prod__image">
						<img src={Hydrolate} alt="Медный чайник с фарфоровой ручкой" />
					</div>
					<div className="slider-prod__desc">
						<p className="slider-prod__text">Медный чайник с фарфоровой ручкой</p>
						<div className="slider-prod__inner">
							<p className="slider-prod__price-old">2 000 грн.</p>
							<p className="slider-prod__price-new">1 953 грн.</p>
						</div>
					</div>
					<button className="slider-prod__like">
						<BsHeart
							size={30}
							className="slider-prod__like-icon"
						/>
					</button>
					<span className="slider-prod__sale">Sale</span>
				</div>
				<div className="slider-prod__item">
					<div className="slider-prod__image">
						<img src={CopperUtensils} alt="Медный чайник с фарфоровой ручкой" />
					</div>
					<div className="slider-prod__desc">
						<p className="slider-prod__text">Медный чайник с фарфоровой ручкой</p>
						<div className="slider-prod__inner">
							<p className="slider-prod__price-old">2 000 грн.</p>
							<p className="slider-prod__price-new">1 953 грн.</p>
						</div>
					</div>
					<button className="slider-prod__like">
						<BsHeart
							size={30}
							className="slider-prod__like-icon"
						/>
					</button>
					<span className="slider-prod__sale">Sale</span>
				</div>
				<div className="slider-prod__item">
					<div className="slider-prod__image">
						<img src={EssentialOils} alt="Медный чайник с фарфоровой ручкой" />
					</div>
					<div className="slider-prod__desc">
						<p className="slider-prod__text">Медный чайник с фарфоровой ручкой</p>
						<div className="slider-prod__inner">
							<p className="slider-prod__price-old">2 000 грн.</p>
							<p className="slider-prod__price-new">1 953 грн.</p>
						</div>
					</div>
					<button className="slider-prod__like">
						<BsHeart
							size={30}
							className="slider-prod__like-icon"
						/>
					</button>
					<span className="slider-prod__sale">Sale</span>
				</div>
				<div className="slider-prod__item">
					<div className="slider-prod__image">
						<img src={Hydrolate} alt="Медный чайник с фарфоровой ручкой" />
					</div>
					<div className="slider-prod__desc">
						<p className="slider-prod__text">Медный чайник с фарфоровой ручкой</p>
						<div className="slider-prod__inner">
							<p className="slider-prod__price-old">2 000 грн.</p>
							<p className="slider-prod__price-new">1 953 грн.</p>
						</div>
					</div>
					<button className="slider-prod__like">
						<BsHeart
							size={30}
							className="slider-prod__like-icon"
						/>
					</button>
					<span className="slider-prod__sale">Sale</span>
				</div>
				<div className="slider-prod__item">
					<div className="slider-prod__image">
						<img src={CopperUtensils} alt="Медный чайник с фарфоровой ручкой" />
					</div>
					<div className="slider-prod__desc">
						<p className="slider-prod__text">Медный чайник с фарфоровой ручкой</p>
						<div className="slider-prod__inner">
							<p className="slider-prod__price-old">2 000 грн.</p>
							<p className="slider-prod__price-new">1 953 грн.</p>
						</div>
					</div>
					<button className="slider-prod__like">
						<BsHeart
							size={30}
							className="slider-prod__like-icon"
						/>
					</button>
					<span className="slider-prod__sale">Sale</span>
				</div>
			</Slider >
		</div >
	)
}