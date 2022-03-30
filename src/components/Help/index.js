import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#836fa9",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const Help = () => {
  const [selectHelp, setSelectHelp] = useState("finance");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <section id="help-section">
      <div className="container">
        <h3 className="block-title wow animate__animated animate__fadeInUp">
          Види допомоги
        </h3>
        <div class="row mr-top-50 wow animate__animated animate__fadeIn">
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
        <div className="oops-box wow animate__animated animate__fadeInUp">
          <span>Блок ще не готовий 😔 </span>
        </div>
      )}
      <button
        onClick={handleOpen}
        className="make-help-button btn grow wow animate__animated animate__fadeInUp animate__delay-1s"
      >
        Допомогти
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ color: "white", fontSize: 24 }}
          >
            Привiт!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ color: "white" }}
          >
            Цей сайт розроблено в рамках тестового завдання. Я знаю, що він
            виконаний далеко не ідеально, але і я претендував на позицію React
            Native. Я вдячний за цю можливість, і перепрошую за відсутність
            валідації форм - на жаль, не вистачило часу. Я б із задоволенням
            додав би Redux та Router, і зробив би більше, але знову-таки не
            вистачило часу. Вибачте ще раз i дякую за увагу!
          </Typography>
        </Box>
      </Modal>
    </section>
  );
};

export default Help;
