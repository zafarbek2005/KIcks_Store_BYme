import React, { memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../images/Logo.svg';
import { IoHome, IoCart, IoHeart, IoPersonSharp } from 'react-icons/io5';
import { MdExplore, MdNotificationsActive } from "react-icons/md";

const Navbar = () => {
  const location = useLocation(); // Get the current route

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
