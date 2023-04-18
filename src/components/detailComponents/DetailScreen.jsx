import React from "react";
import salmon from "../../assets/salmon.jpg";
import './DetailScreen.css'

const DetailScreen = () => {
  return (
    <section className="detail-screen">
      <div
        className="ad-banner"
        style={{
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
          backgroundSize: "cover",
        }}
      >
        <div className="wrd-div">
          <h1 className="banner-title">Pineapple Salmon</h1>
        </div>
      </div>
      <div className="details">
        <div className="ingredients">
          <h2 className="ing">Recipe</h2>
          <p className="ing-p"></p>
          <h2 className="ing">Ingredients</h2>
        </div>
        <div className="instructions">
          <h2 className="instr">Instructions</h2>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
