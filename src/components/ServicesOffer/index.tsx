import { servicesOfferVariables } from '../../services/servicesOffer';
import { Fade } from '../../utils/Animate/Fade';
import { CardServices } from './CardServices';
import { Content, ContentServices } from './styles';

export function ServicesOffer() {
	return (
		<ContentServices id="servicesOffer">
			<Content>
				<Fade>
					<h1>The services i offer:</h1>
				</Fade>

				<span>
					{servicesOfferVariables.map((service, index) => {
						return (
							<Fade right delay={index * 300} key={service.id}>
								<CardServices data={service} />
							</Fade>
						);
					})}
				</span>
			</Content>
		</ContentServices>
	);
}
