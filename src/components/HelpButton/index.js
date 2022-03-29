import React, { useState, useEffect } from "react";

import "./index.css";

const HelpButton = (props) => {
  const [image, setImage] = useState(props.lightImage);

  const hoverBlock = () => {
    const block = document.getElementById("icon-box-" + props.id);
    const title = document.getElementById("help-text-" + props.id);
    setImage(props.image);
    block.classList.add("icon-box-hover");
    title.classList.add("help-text-hover");
  };

  const deleteHoverBlock = () => {
    const block = document.getElementById("icon-box-" + props.id);
    const title = document.getElementById("help-text-" + props.id);
    setImage(props.lightImage);
    block.classList.remove("icon-box-hover");
    title.classList.remove("help-text-hover");
  };

  return (
    <button
      onClick={hoverBlock}
      onMouseOver={hoverBlock}
      onMouseOut={deleteHoverBlock}
      className="help-btn"
      id={"help-section-" + props.id}
    >
      <div className="icon-box" id={"icon-box-" + props.id}>
        <img
          className="icon"
          src={image}
          id={"icon-img-" + props.id}
          alt="Icon"
        ></img>
      </div>
      <div className="help-text" id={"help-text-" + props.id}>
        {props.title}
      </div>
    </button>
  );
};

export default HelpButton;
