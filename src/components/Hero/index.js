import React from "react";
import "animate.css";

import "./index.css";

const heroImage = require("../../assets/img/hero-image.png");

const Hero = (props) => {
  return (
    <section id="hero-section" className="gradient-background">
      <div class="container">
        <div className="hero">
          <div className="title-box">
            <h1 className="title animate__animated animate__fadeInUp">
              Допомагати – це круто
            </h1>
            <div className="sub-title animate__animated animate__fadeInUp delay-1s">
              <h2>Благодійний фонд когось там</h2>
            </div>
            <button
              onClick={props.func}
              className="hero-button btn animate__animated animate__fadeInUp animate__delay-1s"
            >
              Детальніше
            </button>
          </div>
          <div className="image-box">
            <img
              className="image animate__animated animate__zoomIn Updelay-1-5"
              src={heroImage}
              alt="hero"
            />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,64L120,64C240,64,480,64,720,74.7C960,85,1200,107,1320,117.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
