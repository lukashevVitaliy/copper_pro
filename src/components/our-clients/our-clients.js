import './our-clients.scss';

export const OurClients = () => {
	return (
		<div className="our-clients">
			<div className="container">
				<div className="our-clients__wrap">
					<div className="our-clients__desc">
						<h2 className="our-clients__desc-title">Наши клиенты</h2>
						<p className="our-clients__desc-text">
							Мы требовательны к себе, чтобы каждый день становится лучше для наших клиентов и находить лучшие решения для каждого из них
						</p>
					</div>
					<div className="our-clients__counter">
						<p className="our-clients__counter-title">Счетчик клиентов</p>
						<span className="our-clients__counter-quantity">12 346</span>
					</div>
				</div>
			</div>
		</div>
	)
}