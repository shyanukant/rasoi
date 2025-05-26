import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Signature Dish 1",
      title: "Butter Chicken"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Restaurant Interior",
      title: "Elegant Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Tandoor Cooking",
      title: "Traditional Cooking"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Spice Collection",
      title: "Fresh Spices"
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Biryani",
      title: "Aromatic Biryani"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Chef at Work",
      title: "Master Chef"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-rasoi-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rasoi-brown mb-6 font-playfair">
            Gallery
          </h2>
          <p className="text-lg text-rasoi-brown/80 max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through our restaurant, from our beautifully crafted dishes to our elegant dining spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rasoi-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg font-semibold font-playfair">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
