import React, { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { IoSearch, IoPersonSharp, IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header>
        <motion.div
          className="Navbar container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="menu_icon" onClick={toggleSidebar}>
            <IoMenu />
          </div>
          <div className="nav_items">
            <Link to="/">New Drops 🔥</Link>
            <select name="men" id="men">
              <option value="/">Shoes</option>
              <option value="/men-shoes">Men</option>
              <option value="/men-clothing">Clothing</option>
            </select>
            <select name="women" id="women">
              <option value="/">Shoes</option>
              <option value="/women-shoes">Women</option>
              <option value="/women-clothing">Clothing</option>
            </select>
          </div>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav_icons">
            <IoSearch />
            <IoPersonSharp />
            <button>Z</button>
          </div>
        </motion.div>
      </header>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="close_icon" onClick={toggleSidebar}>
          <IoClose />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/men-shoes">Men Shoes</Link></li>
          <li><Link to="/women-shoes">Women Shoes</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>

      <div
        className={`overlay ${isSidebarOpen ? 'visible' : ''}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default memo(Navbar);
