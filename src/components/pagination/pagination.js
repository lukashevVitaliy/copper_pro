
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

import './pagination.scss';

export const Pagination = ({ productsPerPage, totalProducts, paginate, nextPage, prevPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i)
	}

	window.scroll(0, 0);


	return (
		<nav className="pagination">
			<ul className="pagination__menu">
				<li className="pagination__arrow">
					<button
						className="pagination__link"
						onClick={prevPage}
					>
						<BsChevronLeft size={18} />
					</button>
				</li>
				{
					pageNumbers.map(number => (
						<li className="pagination__item ">
							<button
								className="pagination__link"
								onClick={() => paginate(number)}
							>{number}</button>
						</li>
					))
				}
				<li className="pagination__arrow">
					<button
						className="pagination__link"
						onClick={nextPage}
					>
						<BsChevronRight size={18} />
					</button>
				</li>
			</ul>
		</nav>
	)
}