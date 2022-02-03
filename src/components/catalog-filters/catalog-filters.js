import EssentialOils from '../../resources/images/filters/essential-oils.jpg';
import Hydrolate from '../../resources/images/filters/hydrolate.jpg';
import CopperUtensils from '../../resources/images/filters/copper-utensils.jpg';
import CopperAccessories from '../../resources/images/filters/copper-accessories.jpg';

import './catalog-filters.scss';

export const CatalogFilters = () => {
	return (
		<div className="catalog-filters">
			<button className="catalog-filters__item">
				<div className="catalog-filters__image">
					<img src={EssentialOils} alt="Для эфирных масел" />
				</div>
				<span className="catalog-filters__text">Для эфирных масел</span>
			</button>

			<button className="catalog-filters__item">
				<div className="catalog-filters__image">
					<img src={Hydrolate} alt="Для гидролатов" />
				</div>
				<span className="catalog-filters__text">Для гидролатов</span>
			</button>

			<button className="catalog-filters__item">
				<div className="catalog-filters__image">
					<img src={CopperUtensils} alt="Медная посуда" />
				</div>
				<span className="catalog-filters__text">Медная посуда</span>
			</button>

			<button className="catalog-filters__item">
				<div className="catalog-filters__image">
					<img src={CopperAccessories} alt="Аксессуары из меди" />
				</div>
				<span className="catalog-filters__text">Аксессуары из меди</span>
			</button>
		</div>
	)
}