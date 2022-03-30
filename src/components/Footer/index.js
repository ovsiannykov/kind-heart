import React from "react";

import "./index.css";

const footerClick = (e) => {
  e.preventDefault();
  window.open("https://t.me/mikie_mac");
};

const Footer = () => {
  return (
    <>
      <footer>
        <span>
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
