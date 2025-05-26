import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-rasoi-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rasoi-brown mb-6 font-playfair">
            Our Story
          </h2>
          <p className="text-lg text-rasoi-brown/80 max-w-3xl mx-auto leading-relaxed">
            Rasoi, meaning "kitchen" in Hindi, is more than just a restaurant. It's a journey through the rich culinary heritage of India, 
            crafted with passion and served with love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant Interior" 
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-rasoi-brown mb-6 font-playfair">
              A Legacy of Flavors
            </h3>
            <p className="text-rasoi-brown/80 mb-6 leading-relaxed">
              Founded by Chef Arjun Sharma, Rasoi brings together traditional Indian cooking techniques 
              with contemporary presentation. Our menu celebrates the diverse regional cuisines of India, 
              from the robust flavors of Punjab to the delicate spices of Kerala.
            </p>
            <p className="text-rasoi-brown/80 leading-relaxed">
              Every dish is prepared using authentic spices and the freshest ingredients, ensuring 
              an unforgettable dining experience that honors our culinary traditions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-rasoi-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-rasoi-brown">🌶️</span>
              </div>
              <h4 className="text-xl font-semibold text-rasoi-brown mb-4 font-playfair">Authentic Spices</h4>
              <p className="text-rasoi-brown/70">
                Imported directly from India, our spices create the authentic flavors you crave.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-rasoi-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-rasoi-brown">👨‍🍳</span>
              </div>
              <h4 className="text-xl font-semibold text-rasoi-brown mb-4 font-playfair">Expert Chefs</h4>
              <p className="text-rasoi-brown/70">
                Our experienced chefs bring decades of culinary expertise from across India.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-rasoi-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-rasoi-brown">🏛️</span>
              </div>
              <h4 className="text-xl font-semibold text-rasoi-brown mb-4 font-playfair">Elegant Ambiance</h4>
              <p className="text-rasoi-brown/70">
                Dine in a sophisticated setting that reflects the beauty of Indian culture.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;