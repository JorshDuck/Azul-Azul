import Hero from '../components/Hero';
import ServicesTable from '../components/ServicesTable';
import PhotoCarousel from '../components/PhotoCarousel';
import CTA from '../components/CTA';

function Home() {
  return (
    <div className="home">
      <Hero />
      <ServicesTable />
      <PhotoCarousel />
      <CTA /> 
    </div>
  );
}

export default Home;