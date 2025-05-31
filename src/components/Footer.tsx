import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="bg-rasoi-brown border-t border-rasoi-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-rasoi-gold rounded-full flex items-center justify-center">
                <span className="text-rasoi-brown font-bold text-xl font-playfair">R</span>
              </div>
              <h3 className="text-2xl font-bold text-rasoi-gold font-playfair">Rasoi</h3>
            </div>
            <p className="text-rasoi-cream/80 leading-relaxed mb-6 max-w-md">
              Experience the authentic flavors of India in an elegant setting. Where tradition meets luxury 
              in every dish we serve.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/rasoi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rasoi-gold hover:text-rasoi-light-gold transition-colors duration-300 text-2xl"
                aria-label="Facebook"
              >
                <span>📘</span>
              </a>
              <a 
                href="https://instagram.com/rasoi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rasoi-gold hover:text-rasoi-light-gold transition-colors duration-300 text-2xl"
                aria-label="Instagram"
              >
                <span>📷</span>
              </a>
              <a 
                href="https://twitter.com/rasoi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rasoi-gold hover:text-rasoi-light-gold transition-colors duration-300 text-2xl"
                aria-label="Twitter"
              >
                <span>🐦</span>
              </a>
              <a 
                href="https://youtube.com/rasoi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rasoi-gold hover:text-rasoi-light-gold transition-colors duration-300 text-2xl"
                aria-label="YouTube"
              >
                <span>📺</span>
              </a>
              <a 
                href="https://linkedin.com/company/rasoi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rasoi-gold hover:text-rasoi-light-gold transition-colors duration-300 text-2xl"
                aria-label="LinkedIn"
              >
                <span>💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-rasoi-gold mb-4 font-playfair">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (location.pathname === '/'){
                        if (element) {
                        
                        element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }else {
                        navigate('/', {state: { scrollTo: link.toLowerCase() }});
                      }
                      
                    }}
                    className="text-rasoi-cream/80 hover:text-rasoi-gold transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-rasoi-gold mb-4 font-playfair">Contact Info</h4>
            <div className="space-y-3 text-rasoi-cream/80">
              <p>📍 123 Spice Street<br />New York, NY 10001</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@rasoi.com</p>
              <p>🕒 Mon-Sun: 5:00 PM - 10:30 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-rasoi-gold/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-rasoi-cream/60 mb-4 md:mb-0">
              © 2025 Rasoi Restaurant. All rights reserved. Made with ❤️ for food lovers.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-rasoi-cream/60 hover:text-rasoi-gold transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="text-rasoi-cream/60 hover:text-rasoi-gold transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
