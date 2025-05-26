import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-rasoi-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rasoi-brown mb-6 font-playfair">
            Contact Us
          </h2>
          <p className="text-lg text-rasoi-brown/80 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-rasoi-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-rasoi-brown">📍</span>
              </div>
              <h4 className="text-xl font-semibold text-rasoi-brown mb-4 font-playfair">Visit Us</h4>
              <p className="text-rasoi-brown/70 leading-relaxed">
                123 Spice Street<br />
                Foodie District<br />
                New York, NY 10001
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-rasoi-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-rasoi-brown">📞</span>
              </div>
              <h4 className="text-xl font-semibold text-rasoi-brown mb-4 font-playfair">Call Us</h4>
              <p className="text-rasoi-brown/70 leading-relaxed">
                Phone: (555) 123-4567<br />
                Reservations: (555) 123-4568<br />
                Catering: (555) 123-4569
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-rasoi-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-rasoi-brown">🕒</span>
              </div>
              <h4 className="text-xl font-semibold text-rasoi-brown mb-4 font-playfair">Hours</h4>
              <p className="text-rasoi-brown/70 leading-relaxed">
                Monday - Sunday<br />
                5:00 PM - 10:30 PM<br />
                Closed on Major Holidays
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-0">
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.674268742952!2d-74.00597448459394!3d40.74881797932861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1577986721240!5m2!1sen!2sus"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rasoi Restaurant Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;