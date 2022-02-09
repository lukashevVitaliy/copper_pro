import React, { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";



import './slider-catalog-item.scss';

import hydrolate from '../../resources/images/OurProduction/hydrolate.png';
import essentialOils from '../../resources/images/OurProduction/essential-oils.png';
import copperAccessories from '../../resources/images/OurProduction/copper-accessories.png';
import copperUtensils from '../../resources/images/OurProduction/copper-utensils.png';
import individualOrder from '../../resources/images/OurProduction/individual-order.png';



export const SliderCatalogItem = () => {
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
				<SwiperSlide><img src={hydrolate} /></SwiperSlide>
				<SwiperSlide><img src={essentialOils} /></SwiperSlide>
				<SwiperSlide><img src={copperAccessories} /></SwiperSlide>
				<SwiperSlide><img src={copperUtensils} /></SwiperSlide>
				<SwiperSlide><img src={individualOrder} /></SwiperSlide>
			</Swiper>

			<Swiper
				modules={[Thumbs]}
				watchSlidesProgress
				onSwiper={setThumbsSwiper}
				className="slider-right"
			>
				<SwiperSlide><img src={hydrolate} /></SwiperSlide>
				<SwiperSlide><img src={essentialOils} /></SwiperSlide>
				<SwiperSlide><img src={copperAccessories} /></SwiperSlide>
				<SwiperSlide><img src={copperUtensils} /></SwiperSlide>
				<SwiperSlide><img src={individualOrder} /></SwiperSlide>
			</Swiper>
		</div>
	)
}