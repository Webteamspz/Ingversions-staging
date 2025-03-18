import React from "react";

const CompanyLogosSection = () => {
  return (
    <section className="company-logos-section">
      <div className="container">
        <p className="company-logos-text">
          We help designers and product teams from top companies:
        </p>
        <div className="company-logos-list">
          {/* Replace src with the actual paths to your logo images */}
          <img src="/img/brand/brand_img01.png" alt="Amazon" />
          <img src="/img/brand/brand_img02.png" alt="Deloitte" />
          <img src="/img/brand/brand_img03.png" alt="Oracle" />
          <img src="/img/brand/brand_img04.png" alt="Apple" />
          <img src="/img/brand/brand_img05.png" alt="Samsung" />
          <img src="/img/brand/brand_img06.png" alt="Microsoft" />
          <img src="/img/brand/brand_img04.png" alt="Spotify" />
          <img src="/img/brand/brand_img05.png" alt="T-Mobile" />
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosSection;