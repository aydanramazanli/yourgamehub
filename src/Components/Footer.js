import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer= () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <p className="ft-title">{t("footer.brand")}</p>
          <p className="ft-description">{t("footer.footer-text")}</p>
        </div>

        <nav className="ft-list">
          <p className="ft-list-title">{t("footer.list-name")}</p>
          <ul className="ft-list-items">
            <li><Link to="/aboutCasinos">{t("navbar.aboutCasinos")}</Link></li>
            <li><Link to="/contact">{t("navbar.contact")}</Link></li>
            <li><Link to="/terms">{t("navbar.terms")}</Link></li>
            <li><Link to="/cookies">{t("navbar.cookies")}</Link></li>
            <li><Link to="/privacy">{t("navbar.privacy")}</Link></li>
          </ul>
        </nav>

        <div className="ft-subscribe">
          <p className="ft-list-title">{t("footer.footer-email")}</p>
          <SubscribeNewsletter />
        </div>
      </div>

      <div className="ft-copyright">
        <p>© {new Date().getFullYear()} {t("footer.rights")}</p>
        <ul className="ft-social-links">
          <li><a href="#"><FaFacebookF /></a></li>
          <li><a href="#"><FaTwitter /></a></li>
          <li><a href="#"><FaInstagram /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
