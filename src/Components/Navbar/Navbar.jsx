import React, { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../images/Logo.svg';
import { IoHome, IoCart, IoHeart, IoPersonSharp } from 'react-icons/io5';
import { MdExplore, MdNotificationsActive } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('nightMode');
    if (savedTheme === 'true') {
      setIsNightMode(true);
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    } 

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

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    if (!isNightMode) {
      localStorage.setItem('nightMode', 'true');
      document.body.classList.add('night-mode');
    } else {
      localStorage.setItem('nightMode', 'false');
      document.body.classList.remove('night-mode');
    }
  };

  return (
    <>
      <header>
        <motion.div
          className="Navbar container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <div  className="nav_icons">
            <Link id='none_header' to="/cart">
              <IoCart />
            </Link>
            <Link id='none_header' to="/favorites">
              <IoHeart />
            </Link>
            <Link id='none_header' to="/profile">
              <IoPersonSharp />
            </Link>
            <Link>
              <MdNotificationsActive />
            </Link>
            <Link onClick={toggleNightMode}>
              {isNightMode ? <FaSun id='night_mode' /> : <FaMoon id='night_mode' />}
            </Link>
          </div>
        </motion.div>
      </header>

      {/* Bottom App Bar */}
      <div className="bottom_appbar">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          <IoHome />
          <span>Home</span>
        </Link>
        <Link to="/explore" className={location.pathname === '/explore' ? 'active' : ''}>
          <MdExplore />
          <span>Explore</span>
        </Link>
        <Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>
          <IoCart />
          <span>Cart</span>
        </Link>
        <Link to="/favorites" className={location.pathname === '/favorites' ? 'active' : ''}>
          <IoHeart />
          <span>Like</span>
        </Link>
        <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
          <IoPersonSharp />
          <span>Profile</span>
        </Link>
      </div>
    </>
  );
};

export default memo(Navbar);
