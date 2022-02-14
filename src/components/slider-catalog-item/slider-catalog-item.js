import React, { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import './slider-catalog-item.scss';


export const SliderCatalogItem = ({ product }) => {

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="slider-catalog-item">
			<Swiper
				spaceBetween={20}
				slidesPerView={5}
				navigation={true}
				freeMode
				loop
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				direction={"vertical"}
				className="slider-left"
			>
				{
					product.images.map(image => <SwiperSlide key={image.id}><img src={image.image} /></SwiperSlide>)
				}
			</Swiper>

			<Swiper
				modules={[Thumbs]}
				watchSlidesProgress
				onSwiper={setThumbsSwiper}
				className="slider-right"
			>
				{
					product.images.map(image => <SwiperSlide key={image.id}><img src={image.image} /></SwiperSlide>)
				}
			</Swiper>
		</div>
	)
}