import React from 'react';
import CustomCursor from '@/components/CustomCursor';
import FloatingElements from '@/components/FloatingElements';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import BookingSection from '@/components/BookingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-rasoi-cream">
      <CustomCursor />
      <FloatingElements />
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <BookingSection />
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;