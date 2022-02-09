import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, FreeMode, Autoplay } from 'swiper';
import { BsHeart } from 'react-icons/bs';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/free-mode';
import 'swiper/scss/keyboard';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './slider-products.scss';
import EssentialOils from '../../resources/images/OurProduction/essential-oils.png';
import Hydrolate from '../../resources/images/OurProduction/hydrolate.png';
import CopperUtensils from '../../resources/images/OurProduction/copper-utensils.png';

export const SliderProducts = () => {
	return (
		<div className="slider-products">
			<Swiper
				style={{
					"--swiper-navigation-color": "#031412",
					"--swiper-navigation-size": "20px"
				}}
				slidesPerView={3}
				autoplay={true}
				freeMode={true}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				keyboard={{
					enabled: true,
					onlyInViewport: true,
					pageUpDown: true
				}}
				loop={true}
				modules={[Navigation, Pagination, Keyboard, FreeMode, Autoplay]}
			>
				<SwiperSlide>
					<div className="slider-products__item">
						<div className="slider-products__image">
							<img src={EssentialOils} alt="Медный чайник с фарфоровой ручкой" />
						</div>
						<div className="slider-products__desc">
							<p className="slider-products__text">Медный чайник с фарфоровой ручкой</p>
							<div className="slider-products__inner">
								<p className="slider-products__price-old">2 000 грн.</p>
								<p className="slider-products__price-new">1 953 грн.</p>
							</div>
						</div>
						<button className="slider-products__like">
							<BsHeart
								size={30}
								className="slider-products__like-icon"
							/>
						</button>
						<span className="slider-products__sale">Sale</span>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slider-products__item">
						<div className="slider-products__image">
							<img src={EssentialOils} alt="Медный чайник с фарфоровой ручкой" />
						</div>
						<div className="slider-products__desc">
							<p className="slider-products__text">Медный чайник с фарфоровой ручкой</p>
							<div className="slider-products__inner">
								<p className="slider-products__price-old">2 000 грн.</p>
								<p className="slider-products__price-new">1 953 грн.</p>
							</div>
						</div>
						<button className="slider-products__like">
							<BsHeart
								size={30}
								className="slider-products__like-icon"
							/>
						</button>
						<span className="slider-products__sale">Sale</span>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slider-products__item">
						<div className="slider-products__image">
							<img src={EssentialOils} alt="Медный чайник с фарфоровой ручкой" />
						</div>
						<div className="slider-products__desc">
							<p className="slider-products__text">Медный чайник с фарфоровой ручкой</p>
							<div className="slider-products__inner">
								<p className="slider-products__price-old">2 000 грн.</p>
								<p className="slider-products__price-new">1 953 грн.</p>
							</div>
						</div>
						<button className="slider-products__like">
							<BsHeart
								size={30}
								className="slider-products__like-icon"
							/>
						</button>
						<span className="slider-products__sale">Sale</span>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}