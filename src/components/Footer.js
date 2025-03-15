import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/style.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>GLUE Green Travel</h3>
            <p>Du lịch xanh bền vững - Khám phá, Bảo vệ, Tương lai.</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Liên kết nhanh</h3>
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/about">Về chúng tôi</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Liên hệ</h3>
            <ul>
              <li>
                Email:
                <a href="mailto:info@gluegreentravel.com">
                  info@gluegreentravel.com
                </a>
              </li>
              <li>Điện thoại: +84 123 456 789</li>
              <li>Địa chỉ: Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © 2025 GLUE Green Travel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;