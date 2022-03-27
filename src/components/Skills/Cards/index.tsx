import { ContentCards } from './styles';

interface CardsProps {
	skills: string[];
	title: string;
	description: string;
	isActive: boolean;
}

export function Cards({ title, description, skills, isActive }: CardsProps) {
	return (
		<ContentCards isActive={isActive}>
			<p>{description}</p>
			<p>
				{skills.map((skill, index) => `${index !== 0 ? '- ' : ''}${skill}`)}
			</p>
			<h1>{title}</h1>
		</ContentCards>
	);
}
