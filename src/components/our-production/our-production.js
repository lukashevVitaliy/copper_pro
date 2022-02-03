import { Link } from 'react-router-dom';

import EssentialOils from '../../resources/images/OurProduction/essential-oils.png';
import Hydrolate from '../../resources/images/OurProduction/hydrolate.png';
import CopperUtensils from '../../resources/images/OurProduction/copper-utensils.png';
import CopperAccessories from '../../resources/images/OurProduction/copper-accessories.png';
import IndividualOrder from '../../resources/images/OurProduction/individual-order.png';
import Discounts from '../../resources/images/OurProduction/discounts.png';
import './our-production.scss';

export const OurProduction = () => {
	return (
		<div className="our-production">
			<div className="container">
				<h2 className="our-production__title">Наша продукция</h2>
				<div className="our-production__items">
					<Link to="#" className="our-production__item">
						<div className="our-production__image">
							<img src={EssentialOils} alt="Для эфирных масел" />
						</div>
						<p className="our-production__desc">Для эфирных масел</p>
					</Link>
					<Link to="#" className="our-production__item">
						<div className="our-production__image">
							<img src={Hydrolate} alt="Для гидролатов" />
						</div>
						<span className="our-production__desc">Для гидролатов</span>
					</Link>
					<Link to="#" className="our-production__item">
						<div className="our-production__image">
							<img src={CopperUtensils} alt="Медная посуда" />
						</div>
						<span className="our-production__desc">Медная посуда</span>
					</Link>
					<Link to="#" className="our-production__item">
						<div className="our-production__image">
							<img src={CopperAccessories} alt="Аксессуары из меди" />
						</div>
						<span className="our-production__desc">Аксессуары из меди</span>
					</Link>
					<Link to="#" className="our-production__item">
						<div className="our-production__image">
							<img src={IndividualOrder} alt="Индивидуальный заказ" />
						</div>
						<span className="our-production__desc">Индивидуальный заказ</span>
					</Link>
					<Link to="#" className="our-production__item">
						<div className="our-production__image">
							<img src={Discounts} alt="Скидки и предложения" />
						</div>
						<span className="our-production__desc">Скидки и предложения</span>
					</Link>
				</div>
			</div>
		</div>
	)
}