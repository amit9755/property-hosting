import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertySearch from './components/PropertySearch';
import Services from './components/Services';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import AreasWeServe from './components/AreasWeServe';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import LeadForm from './components/LeadForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileContactBar from './components/MobileContactBar';
import LanguagePrompt from './components/LanguagePrompt';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <>
        <Navbar />
        <main>
          <Hero />
          <PropertySearch />
          <Services />
          <FeaturedProperties />
          <WhyChooseUs />
          <AreasWeServe />
          <HowItWorks />
          <About />
          <LeadForm />
          <Contact />
        </main>
        <Footer />
        <MobileContactBar />
        <div className="h-16 lg:hidden" aria-hidden="true" />
        <LanguagePrompt />
      </>
    </LanguageProvider>
  );
}
