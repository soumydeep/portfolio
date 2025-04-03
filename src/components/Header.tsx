import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
              }`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
              }`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('experience')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
              }`}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
              }`}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;