import './quantity-units.scss';

export const QuantityUnits = ({ quantity, setQuantity }) => {

	const decQuantity = () => {
		if (quantity <= 1) return;

		const newQuantity = quantity - 1;
		setQuantity(newQuantity)
	}
	const incQuantity = () => {
		const newQuantity = quantity + 1;
		setQuantity(newQuantity)
	}

	return (
		<div className="quantity-units">
			<button
				type="button"
				className="quantity-units__dec"
				onClick={decQuantity}
			>-</button>
			<span
				className="quantity-units__counter">{quantity}</span>
			<button
				type="button"
				className="quantity-units__inc"
				onClick={incQuantity}
			>+</button>
		</div>
	)
}