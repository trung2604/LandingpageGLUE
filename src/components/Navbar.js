import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="logo">
          <img className="logo_icon" src="/img/travel.png" alt="" />GLUE
          <span>Green Travel</span>
        </div>
        <ul className="nav-menu">
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/about">Về chúng tôi</Link></li>
          <li><Link to="/contact">Liên hệ</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;