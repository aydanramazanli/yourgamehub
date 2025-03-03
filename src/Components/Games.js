import React from "react";
import "../Styles/Games.css";
import { Link } from "react-router-dom";
import { data, newData } from "../Scripts/reviews";
import { useTranslation } from "react-i18next";

export default function Games() {
  const { t } = useTranslation();
  return (
    <div className="games-section">
      <div className="games-description">
        <h3 className="games-title"> {t("games.title")}</h3>
        <h2 className="games-text">{t("games.games-text")}</h2>
      </div>
      <div className="games-content">
        {data.map((game, id) => {
          return (
            <div key={id}>
              <div className="game-item">
                <h2 className="games-name">{game.address}</h2>
                <span className="score">{game.stars} </span>
                <div className="games-img">
                  <img src={game.logo} alt="logo" />
                </div>
                <Link to={`/Games/${game.id}`} className="game-button">
                  {t("games.play-button")}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="content">
        {newData.map((game, id) => {
          return (
            <div key={id}>
              <div className="item">
                <div className="img">
                  <img src={game.logo} alt="logo" />
                </div>
                <div className="score">
                  <span>score</span>
                  {game.score}
                  <span className="stars">{game.stars} </span>
                </div>
                <div>
                  <h2 className="description">{game.text}</h2>
                 
                </div>
                

                <Link to={game.link} target="_blank" className="button">
                  {t("games.play-button")}
                </Link>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
