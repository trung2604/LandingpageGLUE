import React from 'react';
import '../styles/style.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-decor">
          <span className="leaf-icon left"></span>
          <p className="tagline">Du lịch xanh bền vững cùng GLUE Green Travel</p>
          <span className="leaf-icon right"></span>
        </div>
        <p className="subtitle">Hành trình của bạn – Tương lai của hành tinh</p>
        <a href="#download" className="cta-button">Khám phá ngay</a>
      </div>
      <a href="#features" className="scroll-down">
        <span className="arrow-down"></span>
      </a>
    </header>
  );
};

export default Header;