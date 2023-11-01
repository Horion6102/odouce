import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Content from "./components/Content";
import text from "./content/explaination.json";
import style from "./Page.module.css";

export default function Home() {
  const content = text.explain;
  return (
    <div>
      <Navbar />
      <Banner />
      <main>
        <Content dataContent={content.swimmingPool} />
        <Content dataContent={content.addoucisseur} reverse wavingBackground />
        <aside>
          <article>
            <svg></svg>
            <h4>Economie d’énergie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Elementum viverra augue
              arcu aliquet amet neque. Eget euismod ultrices varius integer
              curabitur phasellus ipsum gravida amet.{" "}
            </p>
          </article>
          <article>
            <svg></svg>
            <h4>Economie d’énergie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Elementum viverra augue
              arcu aliquet amet neque. Eget euismod ultrices varius integer
              curabitur phasellus ipsum gravida amet.{" "}
            </p>
          </article>
          <article>
            <svg></svg>
            <h4>Economie d’énergie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Elementum viverra augue
              arcu aliquet amet neque. Eget euismod ultrices varius integer
              curabitur phasellus ipsum gravida amet.{" "}
            </p>
          </article>
        </aside>
        <h3>Pourquoi s’équiper d’un adoucisseur d’eau ?</h3>
        <div>accordeon</div>
      </main>
      <footer>
        <div>
          <h3>Besoin d'information</h3>
          <p>Contactez moi du lundi au samedi, de 9h à 12h et de 14h à 18H</p>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <a href=""></a>
          </div>
          <div>
            <img src="" alt="" />
            <a href=""></a>
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
          <div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
