import React, { useState } from "react";
import { Formik } from "formik";
import axios from 'axios'
import './NewRecipeScreen.css'

const NewRecipeScreen = () => {
  const [ingr, setIngr] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const initialValues = {
    type: '',
    recipeName: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredients: [],
    instructions: ''
  }

  const addIngredients = (e) => {
    e.preventDefault()
    setIngr(prev => [...prev, { name, quantity }])
    setName('')
    setQuantity('')
  }

  const onSubmit = (values) => {
    values.ingredients = ingr
    console.log(values)
    axios.post('https://recipes.devmountain.com/recipes', values)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <section className="new-rec-screen">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
        <form className="new-rec" onSubmit={handleSubmit}>
          <h1 className="new-rec-h">Tell us about your Recipe!</h1>
          <div className="horizontal-input">
            <input onChange={handleChange} type="text" className="rec-name" name="recipeName" placeholder="Name" value={values.recipeName}/>
            <input onChange={handleChange} type="text" className="rec-name" name="imageURL" placeholder="Image URL" value={values.imageURL}/>
          </div>
          <div className="radio-div">
            <input onChange={handleChange} type="radio" className="radio" name="type" id="cook" value="Cook"/>
            <label htmlFor="cook">Cook</label>
            <input onChange={handleChange} type="radio" className="radio" name="type" id="bake" value="Bake"/>
            <label htmlFor="bake">Bake</label>
            <input onChange={handleChange} type="radio" className="radio" name="type" id="drink" value="Drink"/>
            <label htmlFor="drink">Drink</label>
          </div>
          <div className="horizontal-input">
            <input onChange={handleChange} type="text" className="misc-in" name="prepTime" placeholder="Prep Time" value={values.prepTime}/>
            <input onChange={handleChange} type="text" className="misc-in" name="cookTime" placeholder="Cook Time" value={values.cookTime}/>
            <input onChange={handleChange} type="text" className="misc-in" name="serves" placeholder="Serves" value={values.serves}/>
          </div>
          <div  className="new-ing">
            <div className="form-display">
              <div className="vertical-input">
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="ing-in" placeholder="Ingredient"/>
                <input type="text" value={quantity} onChange={e => setQuantity(e.target.value)} className="ing-in" placeholder="Quantity"/>
              </div>
              <ul className="ingr-list">
                {ingr.map(e => <li key={e.name}>{e.quantity} {e.name}</li>)}
              </ul>
            </div>
            <button className="orange-btn" onClick={addIngredients}>Add Another</button>
          </div>
          <textarea onChange={handleChange} id="instruct" cols="30" rows="10" placeholder="What are the instructions?" name="instructions" value={values.instructions}></textarea>
          <button type="submit" className="blue-btn">Save</button>
        </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
