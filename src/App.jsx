// src/App.jsx
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import CompetitiveProgramming from './components/sections/CompetitiveProgramming';
import GitHubStats from './components/sections/GitHubStats';
import Contact from './components/sections/Contact';
import Resume from './components/sections/Resume';

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <CompetitiveProgramming />
        <GitHubStats />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
