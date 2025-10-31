import React from "react";

export const Card = (pokemon) => {
  return (
    <>
     <div className="px-2">
      <div className="card" style={{width: '18rem'}}>
        <h5 className="card-header">{pokemon.name}</h5>
        <img src={pokemon.src} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">{pokemon.description}</p>
          <a href="#" className="btn btn-primary">
              + Info
          </a>
        </div>
      </div>
    </div>
    </>
  );
};
