import React, { useEffect } from "react";
import "../Styles/Privacy.css";
import { useTranslation } from "react-i18next";



function FirstPage() {
  const { t } = useTranslation();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  

  return (
    
    <div
      className="privacy-content"
      style={{ width: "70%", margin: "100px auto 0 auto" }}
    >
      <h1>{t("terms.title")}</h1>

      <h2>{t("terms.sections.1.title")}</h2>
      <p >{t("terms.sections.1.content")}</p>

      <h2>{t("terms.sections.2.title")}</h2>
      <p>{t("terms.sections.2.content")}</p>

      <h2>{t("terms.sections.3.title")}</h2>
      <p>{t("terms.sections.3.content")}</p>

      <h2>{t("terms.sections.4.title")}</h2>
      <p>{t("terms.sections.4.content")}</p>

      <h2>{t("terms.sections.5.title")}</h2>
      <p>{t("terms.sections.5.content")}</p>
      {t("terms.sections.5.restrictions") && (
        <ul>
          {t("terms.sections.5.restrictions", { returnObjects: true }).map(
            (restriction, index) => (
              <li key={index}>{restriction}</li>
            )
          )}
        </ul>
      )}
      <p>{t("terms.sections.5.note")}</p>

      <h2>{t("terms.sections.6.title")}</h2>
      <p>{t("terms.sections.6.content")}</p>
      {t("terms.sections.6.prohibited_actions") && (
        <ul>
          {t("terms.sections.6.prohibited_actions", {
            returnObjects: true,
          }).map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      )}

      <h2>{t("terms.sections.7.title")}</h2>
      <p>{t("terms.sections.7.content")}</p>

      <h2>{t("terms.sections.8.title")}</h2>
      <p>{t("terms.sections.8.content")}</p>

      <h2>{t("terms.sections.9.title")}</h2>
      <p>{t("terms.sections.9.content")}</p>

      <h2>{t("terms.sections.10.title")}</h2>
      <p>{t("terms.sections.10.content")}</p>

      <h2>{t("terms.sections.11.title")}</h2>
      <p>{t("terms.sections.11.content")}</p>

      <h2>{t("terms.sections.12.title")}</h2>
      <p>{t("terms.sections.12.content")}</p>
    </div>
  );
}

export default FirstPage;
