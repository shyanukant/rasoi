import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Booking Confirmed!",
      description: `Thank you ${formData.name}! Your table for ${formData.guests} guests on ${formData.date} at ${formData.time} has been reserved.`,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  return (
    <section id="booking" className="py-20 bg-rasoi-brown">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rasoi-gold mb-6 font-playfair">
            Reserve Your Table
          </h2>
          <p className="text-lg text-rasoi-cream/80 max-w-3xl mx-auto leading-relaxed">
            Book your dining experience at Rasoi. We look forward to serving you an unforgettable meal.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-rasoi-cream/10 backdrop-blur-sm border border-rasoi-gold/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-rasoi-gold text-center font-playfair">
                Book Your Table
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-rasoi-cream font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/90 border-rasoi-gold/30 focus:border-rasoi-gold text-rasoi-brown"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-rasoi-cream font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/90 border-rasoi-gold/30 focus:border-rasoi-gold text-rasoi-brown"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-rasoi-cream font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/90 border-rasoi-gold/30 focus:border-rasoi-gold text-rasoi-brown"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-rasoi-cream font-medium">
                      Number of Guests
                    </Label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-white/90 border border-rasoi-gold/30 rounded-md focus:border-rasoi-gold text-rasoi-brown"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="date" className="text-rasoi-cream font-medium">
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="bg-white/90 border-rasoi-gold/30 focus:border-rasoi-gold text-rasoi-brown"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-rasoi-cream font-medium">
                      Preferred Time *
                    </Label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-white/90 border border-rasoi-gold/30 rounded-md focus:border-rasoi-gold text-rasoi-brown"
                    >
                      <option value="">Select Time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequests" className="text-rasoi-cream font-medium">
                    Special Requests
                  </Label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-white/90 border border-rasoi-gold/30 rounded-md focus:border-rasoi-gold text-rasoi-brown h-24 resize-none"
                    placeholder="Any special requests or dietary requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-rasoi-gold text-rasoi-brown hover:bg-rasoi-light-gold transition-all duration-300 font-semibold py-3 text-lg rounded-full"
                >
                  Confirm Reservation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
