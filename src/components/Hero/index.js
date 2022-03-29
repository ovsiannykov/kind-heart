import React from "react";

import "./index.css";

const heroImage = require("../../assets/img/hero-image.png");

const Hero = () => {
  return (
    <section id="hero-section" className="gradient-background">
      <div class="container">
        <div className="hero">
          <div className="title-box">
            <h1 className="title">Допомагати – це круто</h1>
            <div className="sub-title">
              <h2>Благодійний фонд когось там</h2>
            </div>
            <button className="hero-button btn">Детальніше</button>
          </div>
          <div className="image-box">
            <img className="image" src={heroImage} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
