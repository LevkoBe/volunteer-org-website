import React from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero">
      <div className="hero-content">
        <h1 className="title">Ourobobros</h1>
        <p className="subtitle">Join us in making a difference!</p>
        <button className="cta-button" onClick={scrollToNext}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
