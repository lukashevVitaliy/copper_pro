import { useEffect } from 'react';
import { useHttp } from '../../hooks/http.hooks';
import { useDispatch, useSelector } from 'react-redux';

import { reviewsFetching, reviewsFetched, reviewsFetchingError } from '../../store/reducers/reviewsSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, FreeMode, Autoplay } from 'swiper';
import { Spinner } from '../spinner';

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
	const { reviews, reviewsLoadingStatus } = useSelector(state => state.reviews);
	const dispatch = useDispatch();
	const { request } = useHttp();

	useEffect(() => {
		dispatch(reviewsFetching());
		request("http://localhost:3001/reviews")
			.then(data => dispatch(reviewsFetched(data)))
			.catch(() => reviewsFetchingError())
		// eslint-disable-next-line
	}, [])

	if (reviewsLoadingStatus === 'loading') {
		return <Spinner />
	} else if (reviewsLoadingStatus === 'error') {
		return <h5 className="error">Ошибка загрузки данных...</h5>
	}

	const renderReviewsList = (arr) => {
		if (arr.length === 0) {
			return <h5 className="message">Отзывы отсутствуют...</h5>
		}

		return arr.map(review => {
			const { id, image, name, message, data } = review;

			return (
				<SwiperSlide key={id}>
					<div className="slider-reviews__item">
						<div className="slider-reviews__image">
							<img src={image} alt={name} />
						</div>
						<p className="slider-reviews__name">{name}</p>
						<p className="slider-reviews__desc">{message}</p>
						<p className="slider-reviews__date">{data}</p>
						<div className="slider-reviews__quotes">
							<img src={quotes} alt="quotes" />
						</div>
					</div>
				</SwiperSlide>
			)
		})
	}

	const elements = renderReviewsList(reviews);

	return (
		<div className="slider-reviews">
			<Swiper
				style={{
					"--swiper-navigation-color": "#031412",
					"--swiper-navigation-size": "20px"
				}}
				slidesPerView={3}
				autoplay={false}
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
				{elements}
			</Swiper>
		</div>
	)
}
