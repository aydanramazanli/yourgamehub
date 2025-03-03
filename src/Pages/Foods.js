import React, {useEffect} from "react";
import "../Styles/Doctors.css";
import { useTranslation } from "react-i18next";
import cats from '../Assets/cats.webp'
import egg from '../Assets/easter.webp'
import merlin from '../Assets/rise.webp'
import cash from '../Assets/command.webp'
import fox from '../Assets/taleofkyubiko_webclip_circle_300.webp'



function Doctors() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const { t } = useTranslation();
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Guide to Games</span>
        </h3>

      </div>

      <div className="dt-cards-content">
          <div className="dt-card" >
            <img src={cats} alt='logo' className="dt-card-img" />
            <div className="description">
            <p className="dt-card-title">{t("casinogames.text01")}</p>
            </div>

          </div>
          <div className="dt-card" >
            <img src={egg} alt="logo" className="dt-card-img" />
            <div className="description">
            <p className="dt-card-title">  {t("casinogames.text02")}</p>
            </div>

          </div>          <div className="dt-card" >
            <img src={merlin} alt="logo" className="dt-card-img" />
            <div className="description">
            <p className="dt-card-title">  {t("casinogames.text03")}</p>
            </div>

          </div>          <div className="dt-card" >
            <img src={cash} alt="logo" className="dt-card-img" />
            <div className="description">
            <p className="dt-card-title">  {t("casinogames.text04")}</p>
            </div>

          </div>          <div className="dt-card" >
            <img src={fox} alt='logo' className="dt-card-img" />
            <div className="description">
            <p className="dt-card-title">{t("casinogames.text05")}</p>
            </div>

          </div>
      </div>
    </div>
  );
}

export default Doctors;
