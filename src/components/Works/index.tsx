import { Fade } from '../../utils/Animate/Fade';
import { ContentWork } from './styles';

interface IWork {
	title: string;
	description: string;
	url: string;
	id: number;
  color: string;
}

export function Works({ data }: { data: IWork }) {
	return (
    <Fade>
      <ContentWork url={data.url} color={data.color} id={data.id === 1 ? "project" : ""}>
        {/* Image */}
        <div>
        </div>
        {/* Name center */}
        <span>
          <h1>{data.title}</h1>
          <span>
            <nav></nav>
            <nav></nav>
            <nav></nav>
          </span>
        </span>
        {/* Card */}
        <Fade bottom>
          <section>
            <div>
              <a className='space'>web</a>
              <a>live |</a>
              <a>source code |</a>
              <a>design</a>
            </div>

            <span>
              <p>
                {data.description}
              </p>
            </span>
          </section>    
        </Fade>
  		</ContentWork>
    </Fade>
	);
}
