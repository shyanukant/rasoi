import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-rasoi-brown via-rasoi-dark-brown to-rasoi-brown">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-rasoi-gold mb-6 font-playfair leading-tight">
            Welcome to <span className="text-rasoi-light-gold">Rasoi</span>
          </h1>
          <p className="text-xl md:text-2xl text-rasoi-cream mb-8 leading-relaxed max-w-2xl mx-auto">
            Experience the authentic flavors of India in an elegant setting. Where tradition meets luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('menu')}
              className="bg-rasoi-gold text-rasoi-brown hover:bg-rasoi-light-gold transition-all duration-300 font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Menu
            </Button>
            <Button 
              onClick={() => scrollToSection('booking')}
              variant="outline"
              className="border-rasoi-gold text-rasoi-gold hover:bg-rasoi-gold hover:text-rasoi-brown transition-all duration-300 font-semibold px-8 py-3 rounded-full text-lg"
            >
              Reserve Table
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-rasoi-gold/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-rasoi-gold/20 rounded-full animate-float"></div>
      <div className="absolute top-1/2 left-20 w-2 h-20 bg-rasoi-gold/20 rounded-full animate-float-slow"></div>
    </section>
  );
};

export default HeroSection;