import React, { useState } from 'react';

const Navbar = ({ logoText, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src='customer-1/logontch3.png' alt='' />
      </div>
      <button className='navbar-toggle' onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        {menuItems.map((item, index) => (
          <a key={index} href={` #${item.toLowerCase()}`} className='navbar-link' onClick={() => setIsMenuOpen(false)}>
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
