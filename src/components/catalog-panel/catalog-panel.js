import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { setSearchFilter, setSortByPrice } from '../../store/reducers/filtersProductSlice';
import { AiOutlineSearch } from 'react-icons/ai';

import './catalog-panel.scss';


export const CatalogPanel = () => {
	const [searchValue, setSearchValue] = useState('');
	const [selectedOption, setSelectedOption] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		if (selectedOption) {
			dispatch(setSortByPrice(selectedOption))
		}
	}, [selectedOption])

	const options = [
		{ value: 'downSales', label: 'по убыванию' },
		{ value: 'upSales', label: 'по возростанию' },
	]

	const handleClick = () => {
		dispatch(setSearchFilter(searchValue));
		setSearchValue('');
	}

	return (
		<div className="catalog-panel">
			<div className="catalog-panel__search">
				<input
					name="search"
					type="text"
					placeholder="Поиск"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<button
					type="submit"
					onClick={handleClick}
				>
					<AiOutlineSearch size={15} />
				</button>
			</div>

			<div className="catalog-panel__selected">
				<label htmlFor="filter">Сортировка:</label>
				<Select
					className="catalog-panel__selected-select"
					defaultValue={selectedOption}
					onChange={setSelectedOption}
					options={options}
					placeholder="По цене"
					value={selectedOption}
				/>
			</div>
		</div >
	)
}