import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (sectionId: string) => {
    if (location.pathname === '/') {
      // On home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } else {
      // If not on home, navigate to home and then scroll
      navigate('/', {state: { scrollTo: sectionId }});
      setIsMenuOpen(false);
    }
  }
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   setIsMenuOpen(false);
  // };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rasoi-brown/95 backdrop-blur-sm border-b border-rasoi-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-rasoi-gold rounded-full flex items-center justify-center">
              <span className="text-rasoi-brown font-bold text-xl font-playfair">R</span>
            </div>
            <h1 className="text-2xl font-bold text-rasoi-gold font-playfair">Rasoi</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNav('home')}
              className="text-rasoi-cream hover:text-rasoi-gold transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNav('about')}
              className="text-rasoi-cream hover:text-rasoi-gold transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNav('menu')}
              className="text-rasoi-cream hover:text-rasoi-gold transition-colors duration-300 font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => handleNav('gallery')}
              className="text-rasoi-cream hover:text-rasoi-gold transition-colors duration-300 font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => handleNav('contact')}
              className="text-rasoi-cream hover:text-rasoi-gold transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => handleNav('booking')}
              className="bg-rasoi-gold text-rasoi-brown hover:bg-rasoi-light-gold transition-all duration-300 font-semibold px-6 py-2 rounded-full"
            >
              Book Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-rasoi-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-rasoi-gold/20">
            <nav className="flex flex-col space-y-3 mt-4">
              <button 
                onClick={() => handleNav('home')}
                className="text-rasoi-cream hover:text-rasoi-gold transition-colors duration-300 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('about')}
                className="text-rasoi-cream hover:text-rasoi-gold transition-colors duration-300 font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNav('menu')}
                className="text-rasoi-cream hover:text-rasoi-gold transition-colors duration-300 font-medium text-left"
              >
                Menu
              </button>
              <button 
                onClick={() => handleNav('gallery')}
                className="text-rasoi-cream hover:text-rasoi-gold transition-colors duration-300 font-medium text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNav('contact')}
                className="text-rasoi-cream hover:text-rasoi-gold transition-colors duration-300 font-medium text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => handleNav('booking')}
                className="bg-rasoi-gold text-rasoi-brown hover:bg-rasoi-light-gold transition-all duration-300 font-semibold px-6 py-2 rounded-full w-fit"
              >
                Book Table
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
