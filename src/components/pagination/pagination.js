import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

import './pagination.scss';

export const Pagination = () => {
	return (
		<nav className="pagination">
			<ul className="pagination__menu">
				<li className="pagination__item">
					<button type="submit" className="pagination__link">
						<BsChevronLeft size={18} />
					</button>
				</li>
				<li className="pagination__item">
					<button type="submit" className="pagination__link">1</button>
				</li>
				<li className="pagination__item">
					<button type="submit" className="pagination__link">2</button>
				</li>
				<li className="pagination__item">
					<button type="submit" className="pagination__link">3</button>
				</li>
				<li className="pagination__item">
					<button type="submit" className="pagination__link">4</button>
				</li>
				<li className="pagination__item">
					<button type="submit" className="pagination__link">
						<BsChevronRight size={18} />
					</button>
				</li>
			</ul>
		</nav>
	)
}