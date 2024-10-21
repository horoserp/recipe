import React from "react";
import Prep from "./Prep";

function RecipeTitle() {
  return (
    <section className="title">
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <Prep />
    </section>
  );
}

export default RecipeTitle;
