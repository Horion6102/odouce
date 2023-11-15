"use client";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.globalContainer}>
      <div className={style.secondMenu}>
        <img src="/Odouce.png" alt="logo" className={style.logo} />
        <a href="">Adoucisseurs d'eau</a>
        <a href="">Piscines</a>
        <a href="">Mention légales</a>
      </div>
      <div className={style.contact}>
        <p>Contact</p>
        <a href="tel:0770391082">07 70 39 10 82</a>
        <div>
          <a href="mailto:odouce.services@outlook.fr">
            odouce.services@outlook.fr
          </a>
          <a className={style.facebookLink} href="">
            <img className={style.facebook} src="/images/facebook.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
