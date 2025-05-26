import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Rasoi. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "What are your hours?",
    "Do you have vegetarian options?",
    "How do I make a reservation?",
    "What's your address?",
    "Do you offer delivery?",
    "What are your specialties?"
  ];

  const botResponses = {
    "what are your hours": "We're open Monday-Sunday from 5:00 PM to 10:30 PM. We're closed on major holidays.",
    "hours": "We're open Monday-Sunday from 5:00 PM to 10:30 PM. We're closed on major holidays.",
    "vegetarian": "Absolutely! We have an extensive vegetarian menu including dal, paneer dishes, vegetable curries, biryani, and traditional breads. All our vegetarian dishes are prepared in separate cooking areas.",
    "reservation": "You can make a reservation by using our booking form on this page, calling us at (555) 123-4567, or visiting our website. We recommend booking in advance, especially for weekends!",
    "address": "We're located at 123 Spice Street, Foodie District, New York, NY 10001. We have convenient parking available and are easily accessible by public transport.",
    "menu": "Our menu features authentic Indian cuisine including appetizers like samosas and tandoori wings, main courses like butter chicken and lamb biryani, and delicious desserts. Check out our full menu page!",
    "spicy": "We can adjust the spice level of most dishes to your preference - from mild to extra spicy! Just let your server know your preference when ordering.",
    "delivery": "Yes, we offer delivery through our partner apps and also provide takeout. You can order for pickup by calling us directly at (555) 123-4567.",
    "specialties": "Our specialties include Butter Chicken, Lamb Biryani, Dal Makhani, and our signature Tandoori dishes. We're also famous for our fresh naan bread baked in our traditional tandoor oven!",
    "price": "Our appetizers range from $8-14, main courses from $18-26, and desserts from $6-9. We offer excellent value for authentic, high-quality Indian cuisine.",
    "parking": "We have free parking available for our customers in our dedicated lot behind the restaurant. Street parking is also available.",
    "private": "Yes, we offer private dining for special occasions! We can accommodate parties of 20-50 people. Please call us to discuss your event requirements."
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInputValue('');

    // Enhanced bot response logic
    setTimeout(() => {
      const lowercaseInput = userMessage.toLowerCase();
      let response = "Thank you for your question! For specific inquiries, please call us at (555) 123-4567 or visit us in person. Our staff will be happy to assist you!";

      // Check for keywords in the message
      for (const [keyword, reply] of Object.entries(botResponses)) {
        if (lowercaseInput.includes(keyword)) {
          response = reply;
          break;
        }
      }

      // Additional keyword matching for better responses
      if (lowercaseInput.includes('book') || lowercaseInput.includes('table')) {
        response = botResponses.reservation;
      } else if (lowercaseInput.includes('location') || lowercaseInput.includes('where')) {
        response = botResponses.address;
      } else if (lowercaseInput.includes('cost') || lowercaseInput.includes('expensive')) {
        response = botResponses.price;
      }

      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setMessages(prev => [...prev, { text: reply, isBot: false }]);

    // Direct response for quick replies
    setTimeout(() => {
      const lowercaseReply = reply.toLowerCase();
      let response = "Thank you for your question!";

      for (const [keyword, botReply] of Object.entries(botResponses)) {
        if (lowercaseReply.includes(keyword)) {
          response = botReply;
          break;
        }
      }

      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-rasoi-gold text-rasoi-brown hover:bg-rasoi-light-gold transition-all duration-300 shadow-2xl z-50 flex items-center justify-center text-2xl"
      >
        {isOpen ? '✕' : '💬'}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-50">
          <Card className="h-full bg-white shadow-2xl border border-rasoi-gold/20 flex flex-col">
            <CardHeader className="bg-rasoi-brown text-rasoi-gold p-4 flex-shrink-0">
              <CardTitle className="text-lg font-playfair">Rasoi Assistant</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1 flex flex-col min-h-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-rasoi-cream text-rasoi-brown'
                          : 'bg-rasoi-gold text-rasoi-brown'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="p-3 border-t border-gray-200 flex-shrink-0">
                  <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-1">
                    {quickReplies.map((reply, index) => (
                      <Button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        variant="outline"
                        size="sm"
                        className="text-xs p-1 h-auto border-rasoi-gold/30 text-rasoi-brown hover:bg-rasoi-gold/10"
                      >
                        {reply}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-3 border-t border-gray-200 flex-shrink-0">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 border-rasoi-gold/30 focus:border-rasoi-gold placeholder:text-gray-400"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-rasoi-gold text-rasoi-brown hover:bg-rasoi-light-gold"
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
