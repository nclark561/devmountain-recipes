import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = (props) => {
  const { recImg, recName, recId } = props
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recId}`)
  }

  return (
    <div className="card-div">
      <div
        className="recipe-img"
        style={{
          background: `
              url(${recImg})`,
          backgroundSize: "cover",
        }}
      ></div>
      <h2 className="recipe-name">{recName}</h2>
      <button className="blue-btn" onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;
