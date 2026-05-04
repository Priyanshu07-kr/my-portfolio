
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Logo from './Logo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <a href="#home" className="group flex items-center">
            <Logo size="md" className="group-hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium relative group text-sm lg:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400" />
              ) : (
                <Moon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="Priyanshu Resume.pdf"
              download
              className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-full font-medium text-xs lg:text-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-cyan-400" />
              ) : (
                <Moon className="w-4 h-4 text-gray-600" />
              )}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 mt-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 font-medium text-base ${
                  index === 0 ? 'rounded-t-lg' : ''
                } ${
                  index === navItems.length - 1 ? 'rounded-b-lg' : 'border-b border-gray-100 dark:border-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Resume Button */}
            <a
              href="/Resume-Priyanshu.pdf"
              download
              className="block mx-4 my-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-4 py-3 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
