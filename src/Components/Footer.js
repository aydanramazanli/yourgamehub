import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">mygaminggalaxy.com</p>
            <p className="ft-description">
              mygaminggalaxy 
              {" "+t("footer.footer-text")}
            </p>
          </div>
        </div>

        <div className="ft-list">
          <p className="ft-list-title"> {t("footer.list-name")}</p>
          <ul className="ft-list-items">
            <li>
              <Link to="/aboutCasinos"> {t("navbar.aboutCasinos")}</Link>
            </li>
            <li>
              <Link to="/contact"> {t("navbar.contact")}</Link>
            </li>
            <li>
              <Link to="/terms"> {t("navbar.terms")}</Link>
            </li>
            <li>
              <Link to="/cookies"> {t("navbar.cookies")}</Link>
            </li>
            <li>
              <Link to="/privacy"> {t("navbar.privacy")}</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title"> {t("footer.footer-email")}</p>
          <SubscribeNewsletter />
        </div>
      </div>
    </div>
  );
}

export default Footer;
