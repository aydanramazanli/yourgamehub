import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import i18n from "../Scripts/i18n";
import azerbaijanFlag from "../Assets/en.png";
import polandFlag from "../Assets/german.svg";

function Navbar({ language, setLanguage, t }) {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    setIsOpen(false);
    i18n
      .changeLanguage(lng)
      .then(() => {
        setLanguage(lng);
        console.log("Language changed to:", lng);
        toggleDropdown();
      })
      .catch((error) => {
        console.error("Error changing language:", error);
      });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`navbar-section ${scroll ? "scrolled" : ""}`}>
      <div className="navbar-title">
        <Link to="/" className="logo-link">
          <LazyLoad
            once
            className="logo "
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* <img src={logo} alt="logos" style={{}} /> */}
            <h3 style={{ fontSize: "16px", margin: "0" }}>Your Game Hub</h3>
          </LazyLoad>
        </Link>
      </div>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            {t("navbar.home")}
          </Link>
        </li>
        
        <li>
          <Link to={"/aboutCasinos"} className="navbar-links">
          {t("navbar.about")}
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="navbar-links">
            {t("navbar.contact")}
          </Link>
        </li>
        <li>
          <Link to={"/terms"} className="navbar-links">
            {t("navbar.terms")}
          </Link>
        </li>
        <li>
          <Link to={"/cookies"} className="navbar-links">
            {t("navbar.cookies")}
          </Link>
        </li>
        {/*  <li>
          <Link to={"/privacy"} className="navbar-links">
          {t("navbar.privacy")}
          </Link>
        </li> */}
        {/* <div className="dropdown">
          <div onClick={toggleDropdown} className="selectedItem">
            <h3>{language === "en" ? "EN" : "GE"}</h3>
            <img
              src={language === "en" ? azerbaijanFlag : polandFlag}
              alt="flag"
            />
          </div>
          {isOpen && (
            <ul className="dropdown-ul">
              <li onClick={() => changeLanguage("en")}>
                <h3>EN</h3>
                <img
                  src={azerbaijanFlag}
                  alt="Azerbaijan flag"
                  className="ml-2 w-[40px]"
                />
              </li>
              <li onClick={() => changeLanguage("ge")}>
                <h3>DE</h3>
                <img
                  src={polandFlag}
                  alt="German flag"
                  className="ml-2 w-[40px]"
                />
              </li>
            </ul>
          )}
        </div> */}
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              {t("navbar.home")}
            </Link>
          </li>
          <li>
            <Link to="/aboutCasinos" onClick={openNav}>
              {t("navbar.aboutCasinos")}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={openNav}>
              {t("navbar.contact")}
            </Link>
          </li>
          <li>
            <Link to="/privacy" onClick={openNav}>
              {t("navbar.privacy")}
            </Link>
          </li>
          <li>
            <Link to="/cookies" onClick={openNav}>
              {t("navbar.cookies")}
            </Link>
          </li>
          <li>
            <Link to="/terms" onClick={openNav}>
              {t("navbar.terms")}
            </Link>
          </li>
          <ul className="language-selection" style={{ listStyle: "none" }}>
            <li
              style={
                language === "en" ? { color: "#FFB84C" } : { color: "black" }
              }
              className="mob-lang-list"
              onClick={() => changeLanguage("en")}
            >
              <h3>EN</h3>
              <img
                src={azerbaijanFlag}
                alt="Azerbaijan flag"
                className="mob-lang"
              />
            </li>
            <li
              style={
                language === "ge" ? { color: "#FFB84C" } : { color: "black" }
              }
              className="mob-lang-list"
              onClick={() => changeLanguage("ge")}
            >
              <h3>DE</h3>
              <img src={polandFlag} alt="Poland flag" className="mob-lang" />
            </li>
          </ul>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
