import React from "react";
import "./brands.scss";
import Apple from "@/assets/images/apple.png";
import SectionHeader from "@/components/section-header";

const Brands: React.FC = () => {
  return (
    <section className="brands">
      <SectionHeader
        title="Trusted by 1000+ Businesses"
        subtitle="Our app is trusted and used by over 1000 businesses worldwide"
      />
      <div className="brand-slider">
        <div className="brand-track">
          {Array.from({ length: 10 }).map((_, i) => (
            <div className="brand" key={i}>
              <img src={Apple} alt={`brand-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
