import React, { useEffect, useState } from "react";

import "./index.css";
import HelpButton from "../HelpButton";
import Payment from "../Payment";

const hand = require("../../assets/img/hand.png");
const handLight = require("../../assets/img/hand-light.png");
const purse = require("../../assets/img/purse.png");
const purseLight = require("../../assets/img/purse-light.png");
const clothes = require("../../assets/img/clothes.png");
const clothesLight = require("../../assets/img/clothes-light.png");
const heart = require("../../assets/img/heart.png");
const heartLight = require("../../assets/img/heart-light.png");

const Help = () => {
  const [selectHelp, setSelectHelp] = useState("finance");

  return (
    <section id="help-section">
      <div className="container">
        <h3 className="block-title">Види допомоги</h3>
        <div class="row mr-top-50">
          <div className="col-lg-3 mobile-centered">
            <HelpButton
              id="make"
              title="Зробити"
              image={hand}
              lightImage={handLight}
              onClick={() => setSelectHelp("make")}
            />
          </div>
          <div className="col-lg-3 mobile-centered">
            <HelpButton
              id="finance"
              title="Фінансова допомога"
              image={purse}
              lightImage={purseLight}
              onClick={() => setSelectHelp("finance")}
            />
          </div>
          <div className="col-lg-3 mobile-centered">
            <HelpButton
              id="material"
              title="Матеріальна допомога"
              image={clothes}
              lightImage={clothesLight}
              onClick={() => setSelectHelp("material")}
            />
          </div>
          <div className="col-lg-3 mobile-centered">
            <HelpButton
              id="volunteering"
              title="Волонтерство"
              image={heart}
              lightImage={heartLight}
              onClick={() => setSelectHelp("volunteering")}
            />
          </div>
        </div>
      </div>
      {selectHelp === "finance" ? (
        <Payment />
      ) : (
        <div className="oops-box">
          <span>Блок ще не готовий 😔 </span>
        </div>
      )}
    </section>
  );
};

export default Help;
