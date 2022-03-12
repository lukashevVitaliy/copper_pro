import { useEffect } from 'react';
import { useHttp } from '../../hooks/http.hooks';
import { useDispatch, useSelector } from 'react-redux';

import { productsFetching, productsFetched, productsFetchingError } from '../../store/reducers/productsSlice';
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


export const SliderProducts = () => {
	const products = useSelector(state => state.products.products);

	const renderProductsList = (arr) => {
		if (arr.length === 0) {
			return <h5 className="message">Товар отсутствует...</h5>
		}

		return arr.map((product, i) => {
			if (i > 2) return;

			return (
				<SwiperSlide key={product.id}>
					<div className="slider-products__item">
						<div className="slider-products__image">
							<img src={product.thumbnail} alt={product.name} />
						</div>
						<div className="slider-products__desc">
							<p className="slider-products__text">{product.name}</p>
							<div className="slider-products__inner">
								{
									product.priceOld ? <p className="slider-products__price-old">{product.priceOld} грн.</p> : null
								}
								<p className="slider-products__price-new">{product.priceNew} грн.</p>
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
			)
		})
	}

	const elements = renderProductsList(products);


	return (
		<div className="slider-products">
			<Swiper
				style={{
					"--swiper-navigation-color": "#031412",
					"--swiper-navigation-size": "20px"
				}}
				spaceBetween={30}
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