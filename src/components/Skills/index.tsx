import { SkillsVariables } from '../../services/skills';
import { Cards } from './Cards';
import { ContentSkills } from './styles';

export function Skills() {
	return (
		<ContentSkills id="skills">
			{SkillsVariables.map((skill, index) => {
				return (
					<Cards
						description={skill.description}
						skills={skill.skills}
						title={skill.title}
						isActive={index % 2 !== 0 ? true : false}
						key={skill.id}
					/>
				);
			})}
		</ContentSkills>
	);
}
