import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const APP_ID= "fcb7fe20";
  const APP_KEY="b3e8cbe78d2d86ac4e4002174a4f4cc8";
  
  const [recipes, setRecipes]= useState([])
  const [search, setSearch]= useState("")
  const [query, setQuery]= useState("chicken")
 
 
  useEffect( ()=>{
    getRecipes();
  }, [query]);

   const getRecipes = async ()=>{
     const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
     const data= await response.json();
     setRecipes(data.hits) 
     console.log(data.hits)
   }

const updateSearch= e=>{
  setSearch(e.target.value);
}


const getSearch = e=>{
  e.preventDefault();
  setQuery(search);
  setSearch("")
}


    return (
    <div className="one">
        <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}  />
        <button  className="search-button" type="submit">Search</button>
</form>
<div className= "recipe">
        {recipes.map( e=>(
          <Recipe key={ e. recipe. label }
            title={e. recipe. label}
          calories={e. recipe. calories}
          image={e. recipe. image} 
          ingredients={e. recipe.ingredients}

          
        />
        
        )
        )}
         </div>
    </div>
  )}
  export default App;


