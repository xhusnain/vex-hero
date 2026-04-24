import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Stats from './components/Stats';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Work />
      <Process />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
