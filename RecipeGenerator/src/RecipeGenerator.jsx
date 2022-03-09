import React, { useState } from "react";
import RecipeTemplate from "./RecipeTemplate";
import recipes from "./recipesData";

function RecipeGenerator() {
  const [allRecipes] = useState(recipes);
  const [randomRecipe, setRandomRecipe] = useState({
    obj: {},
    bool: false,
  });

  function handleButton() {
    const randomIndex = Math.floor(Math.random() * allRecipes.length);
    const randomName = allRecipes[randomIndex];
    setRandomRecipe({
      obj: randomName,
      bool: true,
    });
  }

  return (
    <div>
      <div className="container">
        {randomRecipe.bool ? (
          <RecipeTemplate
            recipeObj={randomRecipe.obj}
            handleButton={handleButton}
          />
        ) : (
          <div>
            <br />
            <img
              className="center"
              src="https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1-800x400.jpg"
              alt=""
            />
          </div>
        )}

        <button
          type="button"
          className="btn btn-secondary btn-lg btn-block"
          onClick={handleButton}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default RecipeGenerator;
