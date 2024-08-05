import Head from 'next/head';
import Main from "../components/Main";
import HeadSection from '../components/HeadSection';
import OfferSection from '../components/OfferSection';
import ProcessSection from "../components/ProcessSection";
import CountriesSection from "../components/CountrieSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <div className="text-black bg-white">
      <Head>
        <title>Kebchi Solidarité</title>
        <meta name="description" content="Sacrifier pour l'Aïd et soutenez une famille en Afrique." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headection />
      <OfferSection />
      <ProcessSection />
      <CountriesSection />
      <AboutSection />
      <Main />
    </div>
  );
}
