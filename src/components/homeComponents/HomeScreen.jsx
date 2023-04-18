import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import AdBanner from "./AdBanner";
import "./HomeScreen.css";
import RecipeCard from "./RecipeCard";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')

  const displayRecipes = recipes.filter(e => e.recipe_name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AdBanner />
      <div className="recipe-display">
        <div className="search">
          <BiSearchAlt2 size="2em" color="#DA7635" />
          <input type="text" 
          placeholder="Search for a Recipe"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          />
        </div>
        <div className="card-container">
          {displayRecipes.map(e => <RecipeCard recImg={e.image_url} recName={e.recipe_name} key={e.recipe_id} recId={e.recipe_id}/>)}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
