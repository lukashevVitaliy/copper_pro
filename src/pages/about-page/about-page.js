import { About } from '../../components/about';
import { OurClients } from '../../components/our-clients';
import { OurHistory } from '../../components/our-history';
import { OurGeografy } from '../../components/our-geografy/our-geografy';
import { OurValues } from '../../components/our-values';
import { Advantage } from '../../components/advantage';

import './about-page.scss';

export const AboutPage = () => {
	return (
		<div className="about-page">
			<About />
			<OurClients />
			<OurHistory />
			<OurGeografy />
			<OurValues />
			<Advantage />
		</div>
	)
}