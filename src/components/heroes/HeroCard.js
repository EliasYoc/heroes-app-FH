import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appareance,
  characters,
}) => {
  // console.log("alterego", alter_ego);
  // console.log("charact", characters);
  return (
    <div
      className="card sm-3 animate__animated animate__fadeInLeft"
      style={{ maxWidth: 540 }}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            className="card-img"
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="col-md-8">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}
            <p className="card-text">
              <small className="text-muted">{first_appareance}</small>
            </p>
            <Link to={`./hero/${id}`}>Mas</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
