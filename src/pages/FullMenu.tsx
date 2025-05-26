import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuCategories = {
    appetizers: [
      { name: 'Samosas (2 pieces)', description: 'Crispy pastries filled with spiced potatoes and peas, served with mint and tamarind chutneys', price: '$8', spicy: 'Mild' },
      { name: 'Tandoori Wings (6 pieces)', description: 'Marinated chicken wings cooked in tandoor oven with aromatic spices', price: '$12', spicy: 'Medium' },
      { name: 'Paneer Tikka', description: 'Grilled cottage cheese with bell peppers and onions, marinated in yogurt and spices', price: '$14', spicy: 'Mild' },
      { name: 'Chaat Papri', description: 'Crispy wafers topped with chutneys, yogurt, and fresh herbs - a Delhi street food favorite', price: '$9', spicy: 'Mild' },
      { name: 'Chicken Seekh Kebab', description: 'Minced chicken seasoned with herbs and spices, grilled on skewers', price: '$13', spicy: 'Medium' },
      { name: 'Aloo Tikki', description: 'Crispy potato patties served with chickpea curry and chutneys', price: '$10', spicy: 'Mild' }
    ],
    mains: [
      { name: 'Butter Chicken', description: 'Tender chicken in rich tomato and cream sauce with aromatic spices', price: '$22', spicy: 'Mild' },
      { name: 'Lamb Biryani', description: 'Fragrant basmati rice with spiced lamb, saffron, and caramelized onions', price: '$26', spicy: 'Medium' },
      { name: 'Dal Makhani', description: 'Creamy black lentils simmered overnight with butter and cream', price: '$18', spicy: 'Mild' },
      { name: 'Fish Curry', description: 'Fresh fish in coconut curry with curry leaves and South Indian spices', price: '$24', spicy: 'Medium' },
      { name: 'Chicken Vindaloo', description: 'Spicy Goan curry with tender chicken in tangy tomato sauce', price: '$23', spicy: 'Hot' },
      { name: 'Palak Paneer', description: 'Fresh cottage cheese in creamy spinach gravy with aromatic spices', price: '$19', spicy: 'Mild' },
      { name: 'Rogan Josh', description: 'Traditional Kashmiri lamb curry with aromatic spices and yogurt', price: '$25', spicy: 'Medium' },
      { name: 'Vegetable Korma', description: 'Mixed vegetables in rich cashew and coconut curry sauce', price: '$17', spicy: 'Mild' }
    ],
    breads: [
      { name: 'Garlic Naan', description: 'Fresh bread with garlic and herbs, baked in tandoor oven', price: '$4', spicy: 'None' },
      { name: 'Butter Naan', description: 'Classic soft bread brushed with butter', price: '$3', spicy: 'None' },
      { name: 'Cheese Naan', description: 'Naan stuffed with melted cheese', price: '$5', spicy: 'None' },
      { name: 'Roti', description: 'Whole wheat flatbread, healthy and traditional', price: '$3', spicy: 'None' },
      { name: 'Paratha', description: 'Layered flatbread, crispy and flaky', price: '$4', spicy: 'None' },
      { name: 'Kulcha', description: 'Leavened bread stuffed with onions and herbs', price: '$4', spicy: 'None' }
    ],
    desserts: [
      { name: 'Gulab Jamun (2 pieces)', description: 'Soft milk dumplings in rose-flavored syrup, served warm', price: '$8', spicy: 'None' },
      { name: 'Kulfi', description: 'Traditional Indian ice cream with pistachios and cardamom', price: '$7', spicy: 'None' },
      { name: 'Ras Malai (2 pieces)', description: 'Soft cheese dumplings in sweetened milk with nuts', price: '$9', spicy: 'None' },
      { name: 'Kheer', description: 'Rice pudding with cardamom, almonds, and saffron', price: '$6', spicy: 'None' },
      { name: 'Gajar Halwa', description: 'Carrot pudding with milk, ghee, and nuts', price: '$8', spicy: 'None' },
      { name: 'Mango Lassi', description: 'Creamy yogurt drink with fresh mango', price: '$5', spicy: 'None' }
    ],
    beverages: [
      { name: 'Masala Chai', description: 'Traditional spiced tea with milk and aromatic spices', price: '$4', spicy: 'None' },
      { name: 'Fresh Lime Water', description: 'Refreshing lime juice with mint and soda', price: '$4', spicy: 'None' },
      { name: 'Mango Juice', description: 'Fresh mango juice, seasonal specialty', price: '$5', spicy: 'None' },
      { name: 'Lassi (Sweet/Salt)', description: 'Traditional yogurt drink, choice of sweet or salted', price: '$4', spicy: 'None' },
      { name: 'Indian Coffee', description: 'Strong coffee with milk and spices', price: '$4', spicy: 'None' },
      { name: 'Thandai', description: 'Cool milk drink with nuts and aromatic spices', price: '$6', spicy: 'None' }
    ]
  };

  const getSpicyColor = (level: string) => {
    switch (level) {
      case 'Hot': return 'text-red-600';
      case 'Medium': return 'text-orange-500';
      case 'Mild': return 'text-green-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-rasoi-cream">
      <CustomCursor />
      <Header />
      
      <section className="py-20 bg-rasoi-brown min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-rasoi-gold mb-6 font-playfair">
              Full Menu
            </h1>
            <p className="text-lg text-rasoi-cream/80 max-w-3xl mx-auto leading-relaxed">
              Explore our complete collection of authentic Indian dishes, carefully crafted with traditional recipes and premium ingredients.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {menuCategories[activeCategory as keyof typeof menuCategories].map((item, index) => (
              <Card key={index} className="bg-rasoi-cream/10 backdrop-blur-sm border border-rasoi-gold/20 hover:border-rasoi-gold/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-rasoi-gold font-playfair">{item.name}</h4>
                    <span className="text-xl font-bold text-rasoi-light-gold">{item.price}</span>
                  </div>
                  <p className="text-rasoi-cream/80 leading-relaxed mb-3">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium ${getSpicyColor(item.spicy)}`}>
                      🌶️ {item.spicy}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-rasoi-cream/60 mb-4">
              * All dishes can be customized for dietary restrictions and spice preferences
            </p>
            <Button 
              onClick={() => window.history.back()}
              className="bg-rasoi-gold text-rasoi-brown hover:bg-rasoi-light-gold transition-all duration-300 font-semibold px-8 py-3 rounded-full text-lg"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullMenu;
