import React, { useState } from "react";

const Navbar = ({ logoText }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICE", href: "#service" },
    { label: "NEWS", href: "#news" },
    { label: "GALERY", href: "#gallery" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="customer-1/logontch3.png"
          alt=""
        />
      </div>
      <button
        className="navbar-toggle"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="navbar-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
