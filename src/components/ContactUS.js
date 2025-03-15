import React from 'react';
import '../styles/style.css';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: "https://img.icons8.com/ios-filled/50/2ecc71/phone.png",
      title: "Gọi cho chúng tôi",
      detail: "+84 123 456 789",
      isLink: false,
      href: ""
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/2ecc71/email.png",
      title: "Gửi Email",
      detail: "info@gluegreentravel.com",
      isLink: true,
      href: "mailto:info@gluegreentravel.com"
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/2ecc71/marker.png",
      title: "Ghé thăm chúng tôi",
      detail: "Hà Nội, Việt Nam",
      isLink: false,
      href: ""
    }
  ];

  return (
    <section className="contact-us">
      <div className="container">
        <h2 className="section-title animate-fade-in">Liên hệ với chúng tôi</h2>
        <p className="section-description animate-fade-in delay-1">
          Kết nối với GLUE Green Travel để cùng xây dựng một tương lai
          <strong> du lịch xanh</strong> và bền vững. Chúng tôi luôn sẵn sàng hỗ
          trợ bạn trong hành trình bảo vệ môi trường.
        </p>
        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <div className="contact-card animate-fade-in delay-2" key={index}>
              <div
                className="contact-icon"
                style={{ backgroundImage: `url('${item.icon}')` }}
              ></div>
              <h3 className="contact-title">{item.title}</h3>
              <p className="contact-detail">
                {item.isLink ? (
                  <a href={item.href}>{item.detail}</a>
                ) : (
                  item.detail
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;