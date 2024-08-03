import Main from "../components/Main"
import HeroSection from '../components/HeroSection'
import OfferSection from '../components/OfferSection'


export default function Home() {
  return (
    <div className="text-black bg-white">
      <HeroSection />
      <OfferSection />
      <Main />
    </div>
  );
}
