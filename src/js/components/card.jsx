import React from "react";

export const Card = (pokemon) => {
  return (
    <div>
      <div className="card" style="width: 18rem;">
        <img src={pokemon.url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name}</h5>
          <p className="card-text">{pokemon.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
