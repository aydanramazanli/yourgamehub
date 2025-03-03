import React from 'react';
import { useTranslation } from "react-i18next";

export default function Disclaimer() {
 const { t } = useTranslation();

 return (
   <div style={{
    padding: '20px',
     margin: '20px'
   }}>
     <h1 style={{
       fontSize: '24px',
       fontWeight: 'bold',
       marginBottom: '15px'
     }}>
       {t("disclaimer.title")}
     </h1>
     <p style={{
       fontSize: '16px',
       lineHeight: '1.5'
     }}>
       {t("disclaimer.text")}
     </p>
   </div>
 );
}