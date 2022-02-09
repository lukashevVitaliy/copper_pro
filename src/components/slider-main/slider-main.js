import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/keyboard';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './slider-main.scss';
import bestsellerOne from "../../resources/images/bestseller_one.png";


export const SliderMain = () => {
	return (
		<div className="slider-main">
			<Swiper
				style={{
					"--swiper-navigation-color": "#cb8d62",
					"--swiper-navigation-size": "20px"
				}}
				slidesPerView={1}
				autoplay={true}
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
				modules={[Navigation, Pagination, Keyboard, Autoplay]}
			>
				<SwiperSlide>
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
				</SwiperSlide>
				<SwiperSlide>
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
				</SwiperSlide>
				<SwiperSlide>
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
				</SwiperSlide>
			</Swiper>
		</div>
	)
}