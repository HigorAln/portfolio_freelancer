import { Button } from '../Button';
import { ContentApresentation, Image, Left, Right } from './styles';

export function Apresentation() {
	return (
		<ContentApresentation id="home">
			<Left>
				<div>
					<h2>Higor Allan</h2>
					<h1>software</h1>
					<Button>my work</Button>
				</div>
			</Left>
			<Right>
				<h1>developer</h1>
			</Right>
			<Image src="/phone.svg" alt="iphone image" />
		</ContentApresentation>
	);
}
