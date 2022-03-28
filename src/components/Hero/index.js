import React from "react";

import "./index.css";

const heroImage = require("../../assets/img/hero-image.png");

const Hero = () => {
  return (
    <div class="container">
      <div className="hero">
        <div className="title-box">
          <h1 className="title">Допомагати – це круто</h1>
          <div className="sub-title">
            <p>Благодійний фонд когось там</p>
          </div>
          <button className="hero-button btn">Детальніше</button>
          {/* <a className="hero-button">Детальніше</a> */}
        </div>
        <div className="image-box">
          <img className="image" src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
