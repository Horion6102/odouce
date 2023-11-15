import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Content from "./components/Content";
import text from "./content/explaination.json";
import style from "./Page.module.css";
import Avantage from "./components/Avantage";
import Accordeon from "./components/Accordeon";
import Help from "./components/Help";
import Footer from "./components/Footer";

export default function Home() {
  const content = text.explain;
  return (
    <div className={style.header}>
      <Navbar />
      <Banner />
      <main>
        <Content dataContent={content.swimmingPool} />
        <Content dataContent={content.addoucisseur} reverse wavingBackground />
        <Avantage />
        <Accordeon />
      </main>
      <footer>
        <Help />
        <Footer />
      </footer>
    </div>
  );
}
