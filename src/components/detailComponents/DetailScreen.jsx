import React, { useState, useEffect } from "react";
import salmon from "../../assets/salmon.jpg";
import "./DetailScreen.css";
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DetailScreen = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState('')

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className="detail-screen">
      <div
        className="ad-banner"
        style={{
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
          backgroundSize: "cover",
        }}
      >
        <div className="wrd-div">
          <h1 className="banner-title">{recipe.recipe_name}</h1>
        </div>
      </div>
      <div className="details">
        <div className="ingredients">
          <h2 className="ing">Recipe</h2>
          <div className="rec">
            <p className="ing-p">Prep Time: {recipe.prep_time}</p>
            <p className="ing-p">Cook Time: {recipe.cook_time}</p>
            <p className="ing-p">Serves: {recipe.serves}</p>
          </div>
          <h2 className="ing">Ingredients</h2>
          <ul className="ing-list">
            {recipe.ingredients && recipe.ingredients.map(e => <li key ={e.ingredient_id}>{e.quantity} {e.ingredient}</li>)}
          </ul>
        </div>
        <div className="instructions">
          <h2 className="instr">Instructions</h2>
          <p className="instr-p">
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
