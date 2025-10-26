import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import { Contact, Footer } from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

