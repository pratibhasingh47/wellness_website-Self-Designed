import React, { useState } from 'react';
import Header from './components//Header/Header';
import './App.css'; // Make sure to update this file as well

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className={`main-content ${isMenuOpen ? 'menu-open' : ''}`}>
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default App;
