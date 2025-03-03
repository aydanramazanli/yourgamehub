import React, { useEffect, useState } from "react";
import "../Styles/Heros.css";
import { useTranslation } from "react-i18next";

export default function Heros() {
  const { t } = useTranslation();
  const fullText = t("heros.title");
  const staticPart = fullText.slice(0, 7);
  const [displayText, setDisplayText] = useState(staticPart);
  const [index, setIndex] = useState(fullText.length);
  const [isDeleting, setIsDeleting] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDeleting) {
   
        if (index > 7) {
          setIndex((prev) => prev - 1);
          setDisplayText(fullText.slice(0, index - 1));
        } else {
          setIsDeleting(false);
        }
      } else {

        if (index < fullText.length) {
          setIndex((prev) => prev + 1);
          setDisplayText(fullText.slice(0, index + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index, isDeleting]);

  return (
    <div className="heros-section">
      <div className="heros-content">
      
        <h1 className="heros-title">
          {displayText}
        </h1>
        <p className="heros-description">
        {t("heros.description")}
        </p>
        <button
  className="heros-button"
  onClick={() => window.scrollBy({ top: 700, behavior: "smooth" })}
>
{t("games.play-button")}
</button>

      </div>
    </div>
  );
}
