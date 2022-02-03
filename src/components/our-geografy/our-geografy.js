import mapGeography from '../../resources/images/map-geotraphy.png';
import './our-geografy.scss';

export const OurGeografy = () => {
	return (
		<div className="our-geografy">
			<div className="container">
				<div className="our-geografy__wrap">
					<div className="our-geografy__info">
						<h2 className="our-geografy__title">Наша география</h2>
						<p className="our-geograpy__desc">Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нашем магазине.</p>
					</div>
					<div className="our-geografy__map">
						<img src={mapGeography} alt="карта производства" />
					</div>
				</div>
			</div>
		</div>
	)
}