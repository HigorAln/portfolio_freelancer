import { Button } from '../Button';
import { ContentApresentation, Image, Left, Right } from './styles';
import { Fade } from '../../utils/Animate/Fade'

export function Apresentation() {
	return (
		<ContentApresentation id="home">
			<Left>
				<div>
          <Fade left>
					  <h2>Higor Allan</h2>
          </Fade>
          <Fade left delay={200}>
					  <h1>software</h1>
          </Fade>
          <Fade left delay={400}>
            <a href="#servicesOffer">
              <Button>my work</Button>
            </a>
          </Fade>
				</div>
			</Left>

			<Right>
        <Fade right delay={500}>
				  <h1>developer</h1>
        </Fade>
			</Right>

      {/* <Fade> */}
			  <Image src="/phone.svg" alt="iphone image" />
      {/* </Fade> */}
		</ContentApresentation>
	);
}
