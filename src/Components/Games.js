import React from "react";
import "../Styles/Games.css";
import { Link } from "react-router-dom";
import { data } from "../Scripts/reviews";
import { useTranslation } from "react-i18next";

export default function Games() {
  const { t } = useTranslation();

  return (
    <div className="games-section">
      <div className="games-description"></div>
      <div className="games-content">
        {data.map((game, id) => (
          <div key={id} className="game-item">
            <div className="game-card">
              {/* Ön tərəf */}
              <div className="game-front">
                <img src={game.logo} alt="Game Logo" />
              </div>
              
              {/* Arxa tərəf */}
              <div className="game-back">
                <h2 className="games-name">{game.address}</h2>
                <span className="score">{game.stars}</span>
                <Link to={`/Games/${game.id}`} className="game-button">
                  {t("games.play-button")}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
