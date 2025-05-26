import React from 'react';

const FloatingElements = () => {
  return (
    <>
      {/* Floating Tomato */}
      <div className="floating-element floating-tomato">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" fill="#FF6B6B"/>
          <path d="M12 6L10 2H14L12 6Z" fill="#4CAF50"/>
          <path d="M9 2C9 2 10 3 11 3C12 3 13 2 13 2" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Floating Chili */}
      <div className="floating-element floating-chili">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2C6 2 6 4 8 6C10 8 12 10 12 14C12 18 8 22 4 22C4 18 6 16 8 14C10 12 8 8 6 6C4 4 6 2 8 2Z" fill="#FF4444"/>
          <path d="M8 2L10 1L9 3L8 2Z" fill="#4CAF50"/>
        </svg>
      </div>

      {/* Floating Leaf */}
      <div className="floating-element floating-leaf">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8 2 4 6 4 12C4 16 6 18 8 20C10 22 14 22 16 20C18 18 20 16 20 12C20 6 16 2 12 2Z" fill="#4CAF50"/>
          <path d="M12 2C12 2 14 8 16 12C18 16 20 20 20 20" stroke="#2E7D32" strokeWidth="1" fill="none"/>
        </svg>
      </div>
    </>
  );
};

export default FloatingElements;
