import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const navigate = useNavigate();

  const menuCategories = {
    appetizers: [
      { name: 'Samosas', description: 'Crispy pastries filled with spiced potatoes and peas', price: '$8' },
      { name: 'Tandoori Wings', description: 'Marinated chicken wings cooked in tandoor oven', price: '$12' },
      { name: 'Paneer Tikka', description: 'Grilled cottage cheese with bell peppers and onions', price: '$14' },
      { name: 'Chaat Papri', description: 'Crispy wafers topped with chutneys and yogurt', price: '$9' }
    ],
    mains: [
      { name: 'Butter Chicken', description: 'Tender chicken in rich tomato and cream sauce', price: '$22' },
      { name: 'Lamb Biryani', description: 'Fragrant basmati rice with spiced lamb and saffron', price: '$26' },
      { name: 'Dal Makhani', description: 'Creamy black lentils simmered overnight', price: '$18' },
      { name: 'Fish Curry', description: 'Fresh fish in coconut curry with curry leaves', price: '$24' }
    ],
    desserts: [
      { name: 'Gulab Jamun', description: 'Soft milk dumplings in rose-flavored syrup', price: '$8' },
      { name: 'Kulfi', description: 'Traditional Indian ice cream with pistachios', price: '$7' },
      { name: 'Ras Malai', description: 'Soft cheese dumplings in sweetened milk', price: '$9' },
      { name: 'Kheer', description: 'Rice pudding with cardamom and almonds', price: '$6' }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-rasoi-brown">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rasoi-gold mb-6 font-playfair">
            Our Menu
          </h2>
          <p className="text-lg text-rasoi-cream/80 max-w-3xl mx-auto leading-relaxed">
            Discover a curated selection of authentic Indian dishes, each prepared with traditional techniques and premium ingredients.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(menuCategories).map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-lg font-semibold capitalize transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-rasoi-gold text-rasoi-brown'
                  : 'bg-transparent text-rasoi-gold border border-rasoi-gold hover:bg-rasoi-gold hover:text-rasoi-brown'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {menuCategories[activeCategory as keyof typeof menuCategories].map((item, index) => (
            <Card key={index} className="bg-rasoi-cream/10 backdrop-blur-sm border border-rasoi-gold/20 hover:border-rasoi-gold/40 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold text-rasoi-gold font-playfair">{item.name}</h4>
                  <span className="text-xl font-bold text-rasoi-light-gold">{item.price}</span>
                </div>
                <p className="text-rasoi-cream/80 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate('/full-menu')}
            className="bg-rasoi-gold text-rasoi-brown hover:bg-rasoi-light-gold transition-all duration-300 font-semibold px-8 py-3 rounded-full text-lg"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
