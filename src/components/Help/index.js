import React, { useEffect, useState } from "react";

import "./index.css";
import HelpButton from "../HelpButton";

const Help = () => {
  return (
    <section id="help-section">
      <div className="container">
        <h3 className="block-title">Види допомоги</h3>
        <div class="row mr-top-50">
          <div className="col-lg-3">
            <HelpButton
              id="make"
              title="Зробити"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
              lightImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png"
            />
          </div>
          <div className="col-lg-3">
            {" "}
            <HelpButton
              id="finance"
              title="Фінансова допомога"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
              lightImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png"
            />
          </div>
          <div className="col-lg-3">
            <HelpButton
              id="material"
              title="Матеріальна допомога"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
              lightImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png"
            />
          </div>
          <div className="col-lg-3">
            <HelpButton
              id="volunteering"
              title="Волонтерство"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
              lightImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
