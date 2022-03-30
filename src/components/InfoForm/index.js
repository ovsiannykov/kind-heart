import React, { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import WOW from "wowjs";

import "./index.css";
import Form from "../Form";

const InfoForm = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <section id="form-section">
      <div className="container">
        <h3 className="block-title wow animate__animated animate__fadeInUp">
          Заповніть форму
        </h3>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          size="meddium"
          aria-label="Switch"
          className="wow animate__animated animate__fadeInUp"
        >
          <ToggleButton value="left" aria-label="Фіз. особа">
            <span className="toggle-text"> Фіз. особа</span>
          </ToggleButton>
          <ToggleButton disabled="true" value="right" aria-label="Юр. особа">
            Юр. особа
          </ToggleButton>
        </ToggleButtonGroup>
        <Form />
      </div>
    </section>
  );
};

export default InfoForm;
