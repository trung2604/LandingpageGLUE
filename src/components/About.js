import React from 'react';
import '../styles/style.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title animate-fade-in">Về GLUE Green Travel</h2>
        <p className="section-description animate-fade-in delay-1">
          <span className="highlight">GLUE Green Travel</span> là nền tảng số tiên
          phong, tích hợp công nghệ GIS và GPS, được tạo ra để hỗ trợ du khách
          và cộng đồng địa phương trong việc giảm thiểu tác động môi trường từ
          du lịch. Với sứ mệnh thúc đẩy <strong>du lịch bền vững</strong>, chúng
          tôi cam kết mang đến những hành trình xanh, giúp bảo vệ hệ sinh thái
          và nâng cao nhận thức về bảo vệ môi trường.
        </p>
        <div className="about-grid">
          {/* Card 1: Sứ mệnh và Tầm nhìn */}
          <div className="about-card animate-fade-in delay-2">
            <div
              className="about-icon"
              style={{
                backgroundImage: `url('https://img.icons8.com/ios-filled/50/2ecc71/binoculars.png')`
              }}
            ></div>
            <h3 className="about-title">Sứ Mệnh và Tầm Nhìn</h3>
            <p className="about-description">
              Sứ mệnh của GLUE Green Travel là xây dựng một mô hình du lịch
              xanh, nơi mỗi chuyến đi không chỉ là trải nghiệm mà còn là đóng
              góp tích cực cho hành tinh. Tầm nhìn của chúng tôi là trở thành
              đối tác hàng đầu trong việc phát triển
              <strong> du lịch sinh thái</strong> tại Việt Nam và trên toàn cầu.
            </p>
          </div>
          {/* Card 2: Giá trị cốt lõi */}
          <div className="about-card animate-fade-in delay-3">
            <div
              className="about-icon"
              style={{
                backgroundImage: `url('https://img.icons8.com/ios-filled/50/2ecc71/leaf.png')`
              }}
            ></div>
            <h3 className="about-title">Giá Trị Cốt Lõi</h3>
            <ul className="about-values">
              <li>
                <strong>Bảo vệ môi trường:</strong> Giảm thiểu tác động tiêu cực
                đến thiên nhiên.
              </li>
              <li>
                <strong>Đổi mới sáng tạo:</strong> Ứng dụng GIS/GPS để tối ưu
                hóa hành trình xanh.
              </li>
              <li>
                <strong>Cộng đồng:</strong> Kết nối du khách và người dân địa
                phương.
              </li>
            </ul>
          </div>
          {/* Card 3: Hình ảnh minh họa */}
          <div className="about-image-card animate-fade-in delay-4">
            <img
              src="https://images.unsplash.com/photo-1490730141103-6fd9d2c94f9d?w=800&auto=format&fit=crop&q=60"
              alt="Khái niệm GLUE Green Travel - Du lịch bền vững"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;