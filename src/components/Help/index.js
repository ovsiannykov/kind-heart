import React, { useEffect, useState } from "react";

import "./index.css";

const Help = () => {
  const [oneBlock, setOneBlock] = useState(null);

  useEffect(() => {
    let firstSection = document.getElementById("first-help-section");
    setOneBlock(firstSection);
  }, []);

  return (
    <section id="help-section">
      <div className="container">
        <h3 className="block-title">Види допомоги</h3>
        <div class="row mr-top-50">
          <div className="col-lg-3">
            <button
              onMouseEnter={() => console.log("mouse")}
              className="help-btn"
              id="first-help-section"
            >
              <div className="icon-box">
                <img
                  className="icon"
                  src="https://fabrikaznakov.com.ua/wp-content/uploads/3.21_b.gif"
                  alt="Icon"
                ></img>
              </div>
              <div className="help-text">Зробити</div>
            </button>
          </div>
          <div className="col-lg-3">col</div>
          <div className="col-lg-3">col</div>
          <div className="col-lg-3">col</div>
        </div>
      </div>
    </section>
  );
};

export default Help;
