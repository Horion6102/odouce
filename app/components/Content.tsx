"use client";
import style from "./Content.module.css";

interface propsType {
  dataContent: {
    title: string;
    firstText: string;
    secondText?: string | undefined;
    button: string;
    image: string;
  };
  reverse?: boolean;
  wavingBackground?: boolean;
}

export default function Content(props: propsType) {
  const { title, firstText, secondText, button, image } = props.dataContent;
  return (
    <article
      className={
        props.wavingBackground
          ? style.globalContainerBackground
          : style.globalContainer
      }
    >
      <div
        className={
          props.reverse ? style.contentContainerReverse : style.contentContainer
        }
      >
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{firstText}</p>
        {secondText && <p className={style.text}>{secondText}</p>}
        <button className={style.button}>{button}</button>
      </div>
      <img
        className={props.reverse ? style.imageReverse : style.image}
        src={image}
        alt="illustation d'une piscine"
      />
    </article>
  );
}
