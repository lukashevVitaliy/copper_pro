import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './pagination-catalog.scss';

export const PaginationRounded = ({ productsPerPage, totalProducts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i)
	}

	window.scroll(0, 0);

	return (
		<Stack>
			<Pagination
				count={pageNumbers.length}
				variant="outlined"
				shape="rounded"
				size="large"
				style={{
					display: 'flex',
					justifyContent: 'center'
				}}
				onChange={(e) => console.log(paginate(e.target.textContent))}
			/>
		</Stack>
	);
}
