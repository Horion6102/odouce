"use client";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.globalContainer}>
      <ul className={style.container}>
        <li>
          <a href="" className={style.item}>
            Addoussisseur d'eau
          </a>
        </li>
        <li>
          <a href="" className={style.item}>
            Piscines
          </a>
        </li>
        <li className={style.itemRight}>
          <a href="" className={style.item}>
            Contact
          </a>
        </li>
      </ul>
      <img
        className={style.itemLogo}
        src="/ODouce.png"
        alt="logo de ODouce service"
      />
    </nav>
  );
}
