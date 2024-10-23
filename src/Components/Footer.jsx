// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-50 text-black py-10 mt-[100px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-center mb-4">
            We are a tech company dedicated to providing innovative solutions to our clients. Our mission is to enhance your business with cutting-edge technology.
          </p>
          <div className="flex space-x-6 mb-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-teal-950 hover:text-green-700">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-teal-950 hover:text-green-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-950 hover:text-green-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-teal-950 hover:text-green-700">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <hr className="xl:w-[600px] md:w-[300px] w-full border-t border-black mb-4" /> {/* Line below social links */}
        </div>
        <div className="mt-4 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} IrlaTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
