import { Link } from 'react-router-dom';

import authenticity from '../../resources/icons/advantage/authenticity.svg';
import sophistication from '../../resources/icons/advantage/sophistication.svg';
import honesty from '../../resources/icons/advantage/honesty.svg';
import range from '../../resources/icons/advantage/range.svg';
import delivery from '../../resources/icons/advantage/delivery.svg';
import quality from '../../resources/icons/advantage/quality.svg';
import easeOfUse from '../../resources/icons/advantage/ease-of-use.svg';
import caringForTheEnvironment from '../../resources/icons/advantage/caring-for-the-environment.svg';

import './advantage.scss';

export const Advantage = () => {
	return (
		<div className="advantage">
			<div className="container">
				<h1 className="advantage__title">Почему выбирают нас</h1>
				<div className="advantage__wrap">
					<div className="advantage__item">
						<div className="advantage__image">
							<img src={authenticity} alt="authenticity" />
						</div>
						<h3 className="advantage__subtitle">Аутентичность</h3>
						<p className="advantage__desc">Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.</p>
						<Link to="#" className="advantage__link">Читать больше</Link>
					</div>
					<div className="advantage__item">
						<div className="advantage__image">
							<img src={sophistication} alt="sophistication" />
						</div>
						<h3 className="advantage__subtitle">Изысканность</h3>
						<p className="advantage__desc">Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....</p>
						<Link to="#" className="advantage__link">Читать больше</Link>
					</div>
					<div className="advantage__item">
						<div className="advantage__image">
							<img src={honesty} alt="honesty" />
						</div>
						<h3 className="advantage__subtitle">Честная оплата</h3>
						<p className="advantage__desc">Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c....</p>
						<Link to="#" className="advantage__link">Читать больше</Link>
					</div>
					<div className="advantage__item">
						<div className="advantage__image">
							<img src={range} alt="range" />
						</div>
						<h3 className="advantage__subtitle">Большой ассортимент</h3>
						<p className="advantage__desc">У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования...</p>
						<Link to="#" className="advantage__link">Читать больше</Link>
					</div>
					<div className="advantage__item">
						<div className="advantage__image">
							<img src={delivery} alt="delivery" />
						</div>
						<h3 className="advantage__subtitle">Доставка по всему миру</h3>
						<p className="advantage__desc">Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.</p>
						<Link to="#" className="advantage__link">Читать больше</Link>
					</div>
					<div className="advantage__item">
						<div className="advantage__image">
							<img src={quality} alt="quality" />
						</div>
						<h3 className="advantage__subtitle">Гарантия качества</h3>
						<p className="advantage__desc">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. </p>
						<Link to="#" className="advantage__link">Читать больше</Link>
					</div>
					<div className="advantage__item">
						<div className="advantage__image">
							<img src={easeOfUse} alt="easeOfUse" />
						</div>
						<h3 className="advantage__subtitle">Удобство в использовании</h3>
						<p className="advantage__desc">Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной...</p>
						<Link to="#" className="advantage__link">Читать больше</Link>
					</div>
					<div className="advantage__item">
						<div className="advantage__image">
							<img src={caringForTheEnvironment} alt="caring for the environment" />
						</div>
						<h3 className="advantage__subtitle">Забота об окружающей среде</h3>
						<p className="advantage__desc">От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту....</p>
						<Link to="#" className="advantage__link">Читать больше</Link>
					</div>
				</div>
			</div>
		</div>
	)
}