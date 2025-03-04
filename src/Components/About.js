import React from "react";
import { useTranslation } from "react-i18next";
import "../Styles/About.css";
import "../Styles/Heros.css";
import "../Styles/Card.css";

function About() {
  const { t } = useTranslation();
  
  return (
    <div className="about-section">
      <div className="aboutcomponent-content"></div>

      <div className="about-text-content">
        <div className="about-text-info card">
          <h2 className="card-title">{t("about.free")}</h2>
          <p className="card-text">{t("about.about-text")}</p>
        </div>

        <div className="about-text-info card">
          <h2 className="card-title">{t("heros.title01")}</h2>
          <p className="card-text">{t("heros.desc01")}</p>
        </div>

        <div className="about-text-info card">
          <h2 className="card-title">{t("heros.title02")}</h2>
          <p className="card-text">{t("heros.desc")}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
