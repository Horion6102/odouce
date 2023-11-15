import style from "./Avantage.module.css";

export default function Avantage() {
  return (
    <aside className={style.globalContainer}>
      <article className={style.container}>
        <img
          className={style.svg}
          src="images/lightning.svg"
          alt="éclaire/energie"
        />
        <h4 className={style.title}>Economie d’énergie</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Elementum viverra augue arcu
          aliquet amet neque. Eget euismod ultrices varius integer curabitur
          phasellus ipsum gravida amet.{" "}
        </p>
      </article>
      <article className={style.container}>
        <img
          className={style.svg}
          src="images/savingmoney.svg"
          alt="economique"
        />
        <h4 className={style.title}>Economie d’énergie</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Elementum viverra augue arcu
          aliquet amet neque. Eget euismod ultrices varius integer curabitur
          phasellus ipsum gravida amet.{" "}
        </p>
      </article>
      <article className={style.container}>
        <img className={style.svg} src="images/tools.svg" alt="outils" />
        <h4 className={style.title}>Economie d’énergie</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Elementum viverra augue arcu
          aliquet amet neque. Eget euismod ultrices varius integer curabitur
          phasellus ipsum gravida amet.{" "}
        </p>
      </article>
    </aside>
  );
}
