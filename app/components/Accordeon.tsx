"use client";
import CustomAccordion from "./CustomAccordion";
import style from "./Accordeon.module.css";

export default function Accordeon() {
  return (
    <div className={style.globalContainer}>
      <h3 className={style.title}>
        Pourquoi s’équiper d’un adoucisseur d’eau ?
      </h3>
      <CustomAccordion />
    </div>
  );
}
