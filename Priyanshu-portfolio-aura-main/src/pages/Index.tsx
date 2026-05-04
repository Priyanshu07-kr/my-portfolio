
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import { ThemeProvider } from '../contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Index;
