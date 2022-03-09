import React from "react";
import ReactPlayer from "react-player";
import "./style.css";

function RecipeTemplate(props) {
  console.log(props);

  return (
    <div className="container">
      <div className="grid">
        <div className="a">
          <h1 class="display-1">{props.recipeObj.mealName}</h1>
          <br />
          <h1 class="display-4">{props.recipeObj.mealCategory}</h1>
        </div>

        <div className="b">
          <img
            src={props.recipeObj.mealNameThumb}
            className="img-fluid"
            alt="Responsive image"
          />
          <br />
          <blockquote className="blockquote">
            <p class="mb-0">{props.recipeObj.instructions}</p>
          </blockquote>
        </div>

        <div className="c">
          <ReactPlayer url={props.recipeObj.mealVideo} /> 

          <br />

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ingredient</th>
              </tr>
            </thead>
            <tbody>
              {props.recipeObj.ingredient1 && (
                <tr>
                  <th scope="row">1</th>
                  <td> {props.recipeObj.ingredient1} </td>
                </tr>
              )}
              {props.recipeObj.ingredient2 && (
                <tr>
                  <th scope="row">2</th>
                  <td> {props.recipeObj.ingredient2} </td>
                </tr>
              )}
              {props.recipeObj.ingredient3 && (
                <tr>
                  <th scope="row">3</th>
                  <td> {props.recipeObj.ingredient3} </td>
                </tr>
              )}
              {props.recipeObj.ingredient4 && (
                <tr>
                  <th scope="row">4</th>
                  <td> {props.recipeObj.ingredient4} </td>
                </tr>
              )}
              {props.recipeObj.ingredient5 && (
                <tr>
                  <th scope="row">5</th>
                  <td> {props.recipeObj.ingredient5} </td>
                </tr>
              )}
              {props.recipeObj.ingredient6 && (
                <tr>
                  <th scope="row">6</th>
                  <td> {props.recipeObj.ingredient6} </td>
                </tr>
              )}
              {props.recipeObj.ingredient7 && (
                <tr>
                  <th scope="row">7</th>
                  <td> {props.recipeObj.ingredient7} </td>
                </tr>
              )}
              {props.recipeObj.ingredient8 && (
                <tr>
                  <th scope="row">8</th>
                  <td> {props.recipeObj.ingredient8} </td>
                </tr>
              )}

              {props.recipeObj.ingredient9 && (
                <tr>
                  <th scope="row">9</th>
                  <td> {props.recipeObj.ingredient9} </td>
                </tr>
              )}
              {props.recipeObj.ingredient10 && (
                <tr>
                  <th scope="row">10</th>
                  <td> {props.recipeObj.ingredient10} </td>
                </tr>
              )}
              {props.recipeObj.ingredient11 && (
                <tr>
                  <th scope="row">11</th>
                  <td> {props.recipeObj.ingredient11} </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="d"></div>
       
      </div>
    </div>
  );
}

export default RecipeTemplate;
