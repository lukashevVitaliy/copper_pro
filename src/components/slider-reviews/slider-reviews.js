import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, FreeMode, Autoplay } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/free-mode';
import 'swiper/scss/keyboard';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './slider-reviews.scss';
import user from '../../resources/images/user-reviews.jpg';
import quotes from '../../resources/icons/quotes.svg';

export const SliderReviews = () => {
	return (
		<div className="slider-reviews">
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
					<div className="slider-reviews__item">
						<div className="slider-reviews__image">
							<img src={user} alt="user reviews" />
						</div>
						<p className="slider-reviews__name">Иван Иванов</p>
						<p className="slider-reviews__desc">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
						</p>
						<p className="slider-reviews__date">20.10.21</p>
						<div className="slider-reviews__quotes">
							<img src={quotes} alt="quotes" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slider-reviews__item">
						<div className="slider-reviews__image">
							<img src={user} alt="user reviews" />
						</div>
						<p className="slider-reviews__name">Иван Иванов</p>
						<p className="slider-reviews__desc">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
						</p>
						<p className="slider-reviews__date">20.10.21</p>
						<div className="slider-reviews__quotes">
							<img src={quotes} alt="quotes" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slider-reviews__item">
						<div className="slider-reviews__image">
							<img src={user} alt="user reviews" />
						</div>
						<p className="slider-reviews__name">Иван Иванов</p>
						<p className="slider-reviews__desc">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
						</p>
						<p className="slider-reviews__date">20.10.21</p>
						<div className="slider-reviews__quotes">
							<img src={quotes} alt="quotes" />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
