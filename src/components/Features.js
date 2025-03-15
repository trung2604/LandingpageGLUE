import React from 'react';
import '../styles/style.css';

const Features = () => {
  const featuresTop = [
    {
      icon: "https://img.icons8.com/ios-filled/50/2ecc71/marker.png",
      title: "Tính toán & theo dõi CO2",
      description: "Theo dõi lượng khí thải carbon và nhận gợi ý di chuyển xanh."
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/2ecc71/worldwide-location.png",
      title: "Bản đồ du lịch xanh",
      description: "Khám phá điểm đến bền vững với bản đồ tương tác."
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/2ecc71/target.png",
      title: "Hệ thống thử thách & phần thưởng",
      description: "Tham gia thử thách xanh, tích điểm và nhận ưu đãi hấp dẫn."
    }
  ];

  const featuresBottom = [
    {
      icon: "https://img.icons8.com/ios-filled/50/2ecc71/earth-planet.png",
      title: "Tương tác & cộng đồng",
      description: "Kết nối với cộng đồng du lịch xanh, chia sẻ kinh nghiệm."
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/2ecc71/building.png",
      title: "Hợp tác với doanh nghiệp (B2B)",
      description: "Giải pháp bền vững cho doanh nghiệp du lịch."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Tính năng nổi bật</h2>
        <div className="features-grid features-grid-top">
          {featuresTop.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div
                className="feature-icon"
                style={{ backgroundImage: `url('${feature.icon}')` }}
              ></div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="features-grid features-grid-bottom">
          {featuresBottom.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div
                className="feature-icon"
                style={{ backgroundImage: `url('${feature.icon}')` }}
              ></div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;