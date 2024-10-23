// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from "../../assets/i.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false); // State to track scrolling

  useEffect(() => {
    const path = location.pathname === '/' ? 'Home' : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2);
    setActiveLink(path);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change this value to adjust when the color changes
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar starts */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-teal-950 bg-opacity-95' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src={image} alt="IrlaTech logo" className="w-10 h-10" />
              <span className="text-white text-lg"><span className='text-red-700 text-xl'>I</span>rlaTech</span>
            </div>
            {/* Toggle button only visible on mobile and tablet */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
            {/* Desktop links */}
            <div className="hidden sm:block sm:ml-auto">
              <div className="flex space-x-4">
                {['Home', 'Services', 'Contact'].map((item) => (
                  <div className="relative group" key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      onClick={() => setActiveLink(item)} 
                      className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeLink === item ? 'text-white' : ''}`}
                    >
                      {item}
                    </Link>
                    <span 
                      className={`absolute left-0 right-0 bottom-[-3px] h-0.5 bg-emerald-800 transition-transform duration-300 ease-in-out ${activeLink === item ? 'scale-x-50' : 'scale-x-0 group-hover:scale-x-50'}`} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar for mobile and tablet */}
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
        <div className={`fixed inset-y-0 left-0 transform bg-gray-800 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:hidden w-64`}>
          <div className="flex flex-col mt-16">
            <Link to="/" onClick={() => { setActiveLink('Home'); toggleMenu(); }} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-8 py-4 rounded-md text-xl font-medium">Home</Link>
            <Link to="/services" onClick={() => { setActiveLink('Services'); toggleMenu(); }} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-8 py-4 rounded-md text-xl font-medium">Services</Link>
            <Link to="/contact" onClick={() => { setActiveLink('Contact'); toggleMenu(); }} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-8 py-4 rounded-md text-xl font-medium">Contact</Link>
          </div>
        </div>
      </nav>
      {/* Navbar ends */}
    </>
  );
};

export default Navbar;
