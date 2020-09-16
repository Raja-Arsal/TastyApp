import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title, calories, image, ingredients}) => {
    return(
        
        <div className={style.recipe}>
    <h1>{title} </h1>
    <ol>
            {ingredients.map(i =>(
              <li> {i.text}</li>
            ))}
          </ol>
    <p>Calories:{calories}</p>
<img className={style.images}
src={image} />
    </div>
    )
}
export default Recipe;