import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Privacy.css';

function Cookies() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="privacy-content" style={{width: "70%", margin: "100px auto 0 auto", lineHeight: "1.8"}}>
      <h1>{t('cookiePolicy.title')}</h1>
      <p>{t('cookiePolicy.content')}</p>
      <h2>{t('cookiePolicy.title02')}</h2>
      <p>{t('cookiePolicy.content02')}</p>
      <h2>{t('cookiePolicy.title03')}</h2>
      <p>{t('cookiePolicy.content03')}</p>
      <h2>{t('cookiePolicy.title04')}</h2>
      <ul>
        <li><strong>Essential Cookies:</strong> {t('cookiePolicy.content04.essential')}</li>
        <li><strong>Performance Cookies:</strong> {t('cookiePolicy.content04.performance')}</li>
        <li><strong>Functionality Cookies:</strong> {t('cookiePolicy.content04.functionality')}</li>
        <li><strong>Targeting Cookies:</strong> {t('cookiePolicy.content04.targeting')}</li>
      </ul>
      <h2>{t('cookiePolicy.title05')}</h2>
      <p>{t('cookiePolicy.content05')}</p>
      <h2>{t('cookiePolicy.title06')}</h2>
      <p>{t('cookiePolicy.content06')}</p>
    </div>
  );
}

export default Cookies;
