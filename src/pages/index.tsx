import { useEffect, useState } from 'react';
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
import { useInView } from 'react-intersection-observer'
import Head from 'next/head';

export default function Home() {
  const { ref, inView } = useInView()

  if(process.browser){
    window.history.pushState("", "", "/"); 
  }


	return (
		<Content>
      <Head>
        <title>My Portfolio</title>
      </Head>
    
			<Header />

      <div ref={ref}>
			  <Apresentation />
      </div>

      <Skills />
        
      {WorkVariables.map(work => {
        return (
          <Works data={work} key={work.id}/>
        )
      })}

      <ServicesOffer />

      <Contact />

      <Footer />

      {inView !== true && (
        <ButtonFlutuer />
      )}
		</Content>
	);
}
