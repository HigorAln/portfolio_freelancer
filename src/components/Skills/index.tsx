import { SkillsVariables } from '../../services/skills';
import { Cards } from './Cards';
import { ContentSkills } from './styles';
import { Fade } from '../../utils/Animate/Fade';

export function Skills() {
	return (
		<ContentSkills id="skills">
			{SkillsVariables.map((skill, index) => {
				return (
					<Fade left delay={index * 500} key={skill.id}>
						<Cards
							description={skill.description}
							skills={skill.skills}
							title={skill.title}
							isActive={index % 2 !== 0 ? true : false}
						/>
					</Fade>
				);
			})}
		</ContentSkills>
	);
}
