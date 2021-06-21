import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipe = async () => {
      const plainData = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=643ecb8f&app_key=7cadc8e0cf697101583abf9df9c47e54&from=0&to=3&calories=591-722&health=alcohol-free`
      );
      const data = await plainData.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipe();
  }, [query]);

  return (
    <div className="App">
      <h1 className="title">Receipts on Demand</h1>
      <Form query={query} setQuery={setQuery} />
      <Recipes recipes={recipes} />
    </div>
  );
}

export default App;
