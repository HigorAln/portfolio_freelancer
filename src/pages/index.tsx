import { Apresentation } from '../components/Apresentation';
import { ButtonFlutuer } from '../components/ButtonFlutuer';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ServicesOffer } from '../components/ServicesOffer';
import { Skills } from '../components/Skills';
import { Works } from '../components/Works';
import { WorkVariables } from '../services/work';
import { Content } from '../styles/home';

export default function Home() {
	return (
		<Content>
			<Header />

			<Apresentation />

			<Skills />

      {WorkVariables.map(work => {
        return (
          <Works data={work} key={work.id}/>
        )
      })}

      <ServicesOffer />

      <Contact />

      <Footer />

      <ButtonFlutuer />
		</Content>
	);
}
