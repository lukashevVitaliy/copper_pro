

import './quantity-units.scss';

export const QuantityUnits = () => {
	return (
		<div className="quantity-units">
			<button type="button" className="quantity-units__dec" >-</button>
			<span className="quantity-units__counter">1</span>
			<button type="button" className="quantity-units__inc" >+</button>
		</div>
	)
}