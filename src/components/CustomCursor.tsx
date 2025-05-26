import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollRotation, setScrollRotation] = useState(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = scrollY * 0.5; // Adjust rotation speed
      setScrollRotation(rotation);
    };

    document.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: mousePosition.x - 16,
        top: mousePosition.y - 16,
        transform: `rotate(${scrollRotation}deg)`,
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        className="spoon-cursor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Spoon bowl (larger, rounder) */}
        <ellipse cx="12" cy="7" rx="5" ry="4" fill="#D4AF37" />
        {/* Spoon handle (longer, more elegant) */}
        <rect x="11" y="11" width="2" height="11" rx="1" fill="#D4AF37" />
        {/* Handle tip (rounded end) */}
        <circle cx="12" cy="22" r="1" fill="#D4AF37" />
      </svg>
    </div>
  );
};

export default CustomCursor;
