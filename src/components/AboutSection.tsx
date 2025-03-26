import React from "react";
import "./AboutSection.css";

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2 className="section-heading">About the Initiative</h2>

        <div className="description">
          <h3>What We Do</h3>
          <p>
            We are a non-profit organization focused on promoting environmental
            sustainability through community outreach, education, and action.
          </p>
        </div>

        <div className="mission-vision">
          <div className="card">
            <h3>Our Mission</h3>
            <p>To inspire and empower individuals for a greener future.</p>
          </div>
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              A world where every community takes responsibility for the
              environment.
            </p>
          </div>
        </div>

        <div className="timeline">
          <h3>How It Started</h3>
          <ul>
            <li>
              <span className="year">2015</span>
              <p>Founded to make an environmental impact through education.</p>
            </li>
            <li>
              <span className="year">2017</span>
              <p>Launched a national awareness campaign.</p>
            </li>
            <li>
              <span className="year">2019</span>
              <p>Partnered with local governments for urban green spaces.</p>
            </li>
            <li>
              <span className="year">2021</span>
              <p>Expanded globally, impacting multiple continents.</p>
            </li>
          </ul>
        </div>

        <div className="achievements">
          <h3>Achievements</h3>
          <div className="card achievement-card">
            <h4>Green Spaces Created</h4>
            <div className="achievement-number">50+</div>
          </div>
          <div className="card achievement-card">
            <h4>Global Outreach</h4>
            <div className="achievement-number">500,000+</div>
          </div>
          <div className="card achievement-card">
            <h4>Volunteers Mobilized</h4>
            <div className="achievement-number">10,000+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
