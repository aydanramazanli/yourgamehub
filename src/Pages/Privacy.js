import React ,{useEffect} from "react";
import { useTranslation } from "react-i18next";
import '../Styles/Privacy.css'
function SecondPage() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div  className="privacy-content" style={{width:"70%", margin:"100px auto 0 auto", lineHeight:"1.8"}}>
      <h1>{t("privacy.title")}</h1>
      <p>{t("privacy.content1")}</p>
      <h2>{t("privacy.title02")}</h2>
      <p>{t("privacy.content02")}</p>
      <h2>{t("privacy.title04")}</h2>
      <p>{t("privacy.content05")}</p>
      <h2>{t("privacy.title05")}</h2>
      <p>{t("privacy.content06")}</p>
      <h2>{t("privacy.title06")}</h2>
      <p>{t("privacy.content07")}</p>
      <h2>{t("privacy.title07")}</h2>
      <p>{t("privacy.content08")}</p>
      <h2>{t("privacy.title08")}</h2>
      <p>{t("privacy.content09")}</p>
    </div>
  );
}

export default SecondPage;
