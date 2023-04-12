import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdBanner from './AdBanner'

const HomeScreen = () => { 
  const [recipes, setRecipes] = useState([])
  
  useEffect(() => {
    axios.get('https://recipes.devmountain.com/recipes')
      .then(res => {
        console.log(res.data)
        setRecipes(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen