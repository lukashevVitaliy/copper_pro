import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

import './catalog-pagination.scss';

export const CatalogPagination = () => {
	return (
		<nav className="catalog-pagination">
			<ul className="catalog-pagination__menu">
				<li className="catalog-pagination__item">
					<button type="submit" className="catalog-pagination__link">
						<BsChevronLeft size={18} />
					</button>
				</li>
				<li className="catalog-pagination__item">
					<button type="submit" className="catalog-pagination__link">1</button>
				</li>
				<li className="catalog-pagination__item">
					<button type="submit" className="catalog-pagination__link">2</button>
				</li>
				<li className="catalog-pagination__item">
					<button type="submit" className="catalog-pagination__link">3</button>
				</li>
				<li className="catalog-pagination__item">
					<button type="submit" className="catalog-pagination__link">4</button>
				</li>
				<li className="catalog-pagination__item">
					<button type="submit" className="catalog-pagination__link">
						<BsChevronRight size={18} />
					</button>
				</li>
			</ul>
		</nav>
	)
}