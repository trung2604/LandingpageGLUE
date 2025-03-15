import React from 'react';
import '../styles/style.css';

const Blog = () => {
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      title: "5 Mẹo Du Lịch Xanh Cho Người Mới Bắt Đầu",
      excerpt: "Khám phá các cách đơn giản để giảm tác động môi trường trong chuyến đi của bạn."
    },
    {
      image: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      title: "Hành Trình Giảm CO2 Cùng GLUE Green Travel",
      excerpt: "Câu chuyện của một du khách đã giảm 50% lượng khí thải trong chuyến đi."
    },
    {
      image: "https://images.unsplash.com/photo-1498855334913-beab58c25a2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      title: "Top 10 Điểm Đến Bền Vững Tại Việt Nam",
      excerpt: "Danh sách các điểm đến thân thiện với môi trường mà bạn không thể bỏ qua."
    }
  ];

  return (
    <section className="blog">
      <div className="container">
        <h2 className="section-title">Tin tức mới nhất</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <div
                className="blog-image"
                style={{ backgroundImage: `url('${post.image}')` }}
              ></div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="read-more">Đọc thêm</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;