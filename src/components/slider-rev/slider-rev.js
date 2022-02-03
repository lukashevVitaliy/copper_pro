import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import user from '../../resources/images/user-reviews.jpg';
import quotes from '../../resources/icons/quotes.svg';

import './slider-rev.scss';

export const SliderRev = () => {
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
		<div className="slider-rev">
			<Slider {...settings}>
				<div className="slider-rev__item">
					<div className="slider-rev__image">
						<img src={user} alt="user reviews" />
					</div>
					<p className="slider-rev__name">Иван Иванов</p>
					<p className="slider-rev__desc">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
					</p>
					<p className="slider-rev__date">20.10.21</p>
					<img className="slider-rev__img" src={quotes} alt="quotes" />
				</div>
				<div className="slider-rev__item">
					<div className="slider-rev__image">
						<img src={user} alt="user reviews" />
					</div>
					<p className="slider-rev__name">Иван Иванов</p>
					<p className="slider-rev__desc">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
					</p>
					<p className="slider-rev__date">20.10.21</p>
					<img className="slider-rev__img" src={quotes} alt="quotes" />
				</div>
				<div className="slider-rev__item">
					<div className="slider-rev__image">
						<img src={user} alt="user reviews" />
					</div>
					<p className="slider-rev__name">Иван Иванов</p>
					<p className="slider-rev__desc">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
					</p>
					<p className="slider-rev__date">20.10.21</p>
					<img className="slider-rev__img" src={quotes} alt="quotes" />
				</div>
				<div className="slider-rev__item">
					<div className="slider-rev__image">
						<img src={user} alt="user reviews" />
					</div>
					<p className="slider-rev__name">Иван Иванов</p>
					<p className="slider-rev__desc">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
					</p>
					<p className="slider-rev__date">20.10.21</p>
					<img className="slider-rev__img" src={quotes} alt="quotes" />
				</div>
				<div className="slider-rev__item">
					<div className="slider-rev__image">
						<img src={user} alt="user reviews" />
					</div>
					<p className="slider-rev__name">Иван Иванов</p>
					<p className="slider-rev__desc">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
					</p>
					<p className="slider-rev__date">20.10.21</p>
					<img className="slider-rev__img" src={quotes} alt="quotes" />
				</div>
				<div className="slider-rev__item">
					<div className="slider-rev__image">
						<img src={user} alt="user reviews" />
					</div>
					<p className="slider-rev__name">Иван Иванов</p>
					<p className="slider-rev__desc">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
					</p>
					<p className="slider-rev__date">20.10.21</p>
					<img className="slider-rev__img" src={quotes} alt="quotes" />
				</div>

			</Slider >
		</div >
	)
}