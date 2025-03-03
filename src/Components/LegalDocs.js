

import React, { useEffect } from "react";
import "../Styles/LegalDocs.css";

function LegalDocs({ title, sections }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-text-content" >
      <div className="legal-text-content">
        {sections.map((section, index) => (
          <div key={index}>
            <h2>{section.title}</h2>
            <p className="legal-description">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LegalDocs;
