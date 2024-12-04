import HeroSection from '../components/HeroSection';
import Reviews from '../components/reviews';
import Plans from '../components/PlanCard';
import ContactCards from '../components/ContactCards';

function Home() {
  return (
    <>
      <HeroSection />
      <Reviews />
      <Plans />
      <ContactCards />
    </>
  );
}

export default Home;

