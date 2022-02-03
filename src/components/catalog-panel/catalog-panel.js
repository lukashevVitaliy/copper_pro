import { AiOutlineSearch } from 'react-icons/ai';

import './catalog-panel.scss';

export const CatalogPanel = () => {
	return (
		<div className="catalog-panel">
			<div className="catalog-panel__search">
				<input name="search" type="text" placeholder="Поиск" />
				<button type="submit">
					<AiOutlineSearch size={15} />
				</button>
			</div>
			<div className="catalog-panel__selected">
				<label htmlFor="filter">Сортировка:</label>
				<select name="filter" id="filter">
					<option value="">По цене</option>
					<option value="SALES">по убыванию</option>
					<option value="SALES">по возростанию</option>
				</select>
			</div>
		</div>
	)
}