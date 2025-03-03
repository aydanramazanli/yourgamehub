import React from "react";
import { useTranslation } from "react-i18next";
import "../Styles/About.css";
import "../Styles/Heros.css";
import '../Styles/Card.css'

function About() {
  const { t } = useTranslation();
  return (
    <div className="about-section">
      <div className="aboutcomponent-content" >
        {/* <h3 className="heros-text"> {t("about.nav")}</h3> */}
        {/* <h1 className="heros-title">
        {t("about.title")}
        </h1> */}

      </div>

      <div className="about-text-content">
        <div className="about-text-info">
          <h2 className="card-title">  {t("about.free")}</h2>
          <p className="card-text">
          {t("about.about-text")}
          </p>
        </div>
        <div>

         <div className="about-text-info"> <h2 className="card-title">mygaminggalaxy{t("heros.title01")}</h2>
          <p className="card-text">
          {t("heros.desc01")}
          </p></div>
         
        </div>
        <div>
        <div className="about-text-info">          <h2 className="card-title"> {t("heros.title02")}</h2>
          <p className="card-text">
          {t("heros.desc")}
          </p></div>

        </div>
      </div>
    </div>
  );
}

export default About;
