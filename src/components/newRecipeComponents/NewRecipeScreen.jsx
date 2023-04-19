import React, { useState } from "react";
import './NewRecipeScreen.css'

const NewRecipeScreen = () => {
  return (
    <section className="new-rec-screen">
      <form className="new-rec">
        <h1 className="new-rec-h">Tell us about your Recipe!</h1>
        <div className="horizontal-input">
          <input type="text" />
          <input type="text" />
        </div>
        <div className="radio-div">
          <input type="radio" name="type" id="cook"/>
          <label htmlFor="cook">Cook</label>
          <input type="radio" name="type" id="bake"/>
          <label htmlFor="bake">Bake</label>
          <input type="radio" name="type" id="drink"/>
          <label htmlFor="drink">Drink</label>
        </div>
        <div className="horizontal-input">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <form  className="new-ing">
          <div className="form-display">
            <div className="veritcal-input">
              <input type="text" />
              <input type="text" />
            </div>
            <ul>

            </ul>
          </div>

          <button></button>
        </form>
        <textarea name="instruct" id="instruct" cols="30" rows="10"></textarea>
        <button type="submit">Save</button>
      </form>
    </section>
  );
};

export default NewRecipeScreen;
