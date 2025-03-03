import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TermsConditions from "./Pages/TermsConditions";
import Privacy from "./Pages/Privacy";
import NotFound from "./Pages/NotFound";
import Doctors from "./Pages/Foods";
import Contact from "./Pages/Contact";
import PlayGame from "./Pages/PlayGame";
import Cookies from "./Pages/Cookies";
import CookieConsent from "react-cookie-consent";
import AnimatedBackground from "./Components/Animation";

// function loadGTM() {
//   const script = document.createElement("script");
//   script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-WT55PC3W";
//   script.async = true;
//   document.head.appendChild(script);
// }

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("en");
  // useEffect(() => {
  //   loadGTM();
  // }, []);



  return (
    <div className="App" >
      <Router basename="/">
        <Navbar language={language} setLanguage={setLanguage} t={t} />
        <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="mySiteCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={() => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'consent_given'
          });
         
        }}
      >
      This site uses cookies. Please accept cookies for a better user experience.
      </CookieConsent>
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route
            path="/terms"
            element={<TermsConditions language={language} />}
          />
          <Route path="/cookies" element={<Cookies language={language} />} />
          <Route path="/privacy" element={<Privacy language={language} />} />
          <Route
            path="/aboutCasinos"
            element={<Doctors language={language} />}
          />
          <Route path="*" element={<NotFound language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="/games/:id" element={<PlayGame language={language} />} />
        </Routes>
        <Footer language={language} />
       
       
      </Router>
    </div>

  );
}

export default App;
