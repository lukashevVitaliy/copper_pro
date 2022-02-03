import './our-values.scss';
import forest from '../../resources/images/about/forest.jpg';
import clock from '../../resources/icons/clock.svg';
import diamond from '../../resources/icons/diamond.svg';
import arms from '../../resources/icons/arms.svg';


export const OurValues = () => {
	return (
		<div className="our-values">
			<div className="container">
				<div className="our-values__wrap">
					<div className="our-values__image">
						<img src={forest} alt="forest" />
						<span className="our-values__text">COPPER PRO</span>
					</div>
					<div className="our-values__desc">
						<h2 className="our-values__title">Наши ценности</h2>
						<p className="our-values__info">Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нашем магазине.</p>
						<div className="our-values__block">
							<span className="our-values__icon"><img src={clock} alt="clock" /></span>
							<span className="our-values__value">Оперативность</span>
						</div>
						<div className="our-values__block">
							<span className="our-values__icon"><img src={diamond} alt="diamond" /></span>
							<span className="our-values__value">Качественный товар и сервис</span>
						</div>
						<div className="our-values__block">
							<span className="our-values__icon"><img src={arms} alt="arms" /></span>
							<span className="our-values__value">Гибкость</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}