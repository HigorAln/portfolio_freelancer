import { IconType } from 'react-icons/lib';
import { ContentCardServices } from './styles';

interface ICardServices {
	data: {
		id: number;
		title: string;
		description: string;
		Icon: IconType;
		active?: boolean;
	};
}

export function CardServices({ data }: ICardServices) {
	return (
		<ContentCardServices active={data.active}>
			<data.Icon />

			<h1>{data.title}</h1>

			<p>{data.description}</p>

			{!data.active && (
				<div className="not_offer">
					<h1>{"I don't offer at the moment"}</h1>
				</div>
			)}
		</ContentCardServices>
	);
}
