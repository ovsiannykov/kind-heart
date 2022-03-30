import React, { useEffect } from "react";
import WOW from "wowjs";

import "./index.css";

const footerClick = (e) => {
  e.preventDefault();
  window.open("https://t.me/mikie_mac");
};

const Footer = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <footer>
        <span className="wow animate__animated animate__fadeInUp">
          Created by{" "}
          <a href="https://t.me/mikie_mac" onClick={footerClick}>
            ovsiannykov
          </a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
