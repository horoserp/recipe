import RecipeTitle from "./RecipeTitle";
import "./App.css";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

function App() {
  return (
    <div className="container">
      <main className="recipe-container">
        <img src="/recipe/image-omelette.jpeg" alt="Simple Omelette Recipe" />
        <RecipeTitle />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </main>
    </div>
  );
}

export default App;
