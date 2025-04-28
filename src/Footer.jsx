import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FooterSosial = () => {
  return (
    <footer className='footer'>
      <div></div>
      <div className='footer-section logo-section'>
        <h2 className='brand'>
          Nuansa<span>Technology</span>
        </h2>
        <p>© 2025 Nuansa Technology</p>
      </div>

      <div className='footer-section link-section'>
        <a href='#'>Syarat & Ketentuan</a>
        <a href='#'>Ketentuan Pengembalian</a>
      </div>

      <div className='footer-section social-section'>
        <p>Stay connected with us</p>
        <div className='icons'>
          <a href='#'>
            <FaFacebookF />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSosial;
