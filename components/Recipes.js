import React from "react";
import Recipe from "./Recipe.js";

const Recipes = props => {
  return (
    <div className="recipes">
      <ul>
        {props.recipes.map(item => (
          <Recipe recipe={item} />
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
