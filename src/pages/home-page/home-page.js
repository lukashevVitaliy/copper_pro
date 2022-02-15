import { SliderMain } from '../../components/slider-main';
import { OurProduction } from '../../components/our-production';
import { BestSelling } from '../../components/best-selling';
import { Novelties } from '../../components/novelties';
import { Promo } from '../../components/promo';
import { Recommend } from '../../components/recommend';
import { Sales } from '../../components/sales';
import { Reviews } from '../../components/reviews';
import { Advantage } from '../../components/advantage';

import './home-page.scss';


export const HomePage = () => {

	return (
		<div className="home-page">
			<div className="home-page__bestseller">
				<SliderMain />
				<OurProduction />
				<BestSelling />
				<Novelties />
				<Promo />
				<Recommend />
				<Sales />
				<Reviews />
				<Advantage />
			</div>
		</div>
	)
}