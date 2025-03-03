import React from "react";

import { useTranslation } from "react-i18next";
function NotFound() {
  const deployedURL = window.location.href;
 
  const { t } = useTranslation();

  return (
    <div style={{color:"white", height:"70vh"}}>
      <h1>{t("notFount.title")}</h1>
      <p>{t("notFount.text")}</p>

    </div>
  );
}

export default NotFound;
