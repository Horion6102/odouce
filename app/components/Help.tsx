"use client";
import style from "./Help.module.css";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function Help() {
  return (
    <div id="contact" className={style.globalContainer}>
      <div className={style.containerInfo}>
        <h3 className={style.title}>Besoin d'information</h3>
        <p className={style.text}>
          Contactez moi du lundi au samedi, de 9h à 12h et de 14h à 18H
        </p>
      </div>
      <div className={style.containerContact}>
        <a href="tel:0770391082" className={style.item}>
          <CallRoundedIcon className={style.icon} />
          <span>07 70 39 10 82</span>
        </a>
        <a href="mailto:odouce.services@outlook.fr" className={style.item}>
          <EmailRoundedIcon className={style.icon} />
          <span>odouce.services@outlook.fr</span>
        </a>
      </div>
    </div>
  );
}
