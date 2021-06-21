import React from "react";
import style from "./recipes.module.css";

const Recipe = ({ recipe }) => {
  return (
    <div className={style.recipe}>
      <img src={recipe.recipe.image} alt="rec" className={style.image} />

      <li>
        <h2>{recipe.recipe.label}</h2>
        <ol>
          {recipe.recipe.ingredients.map(item => (
            <li>{item.text}</li>
          ))}
        </ol>
        <h5>Calories: {recipe.recipe.calories.toFixed()} kcal</h5>
      </li>
    </div>
  );
};

export default Recipe;
