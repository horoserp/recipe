import RecipeTitle from "./RecipeTitle";
import "./App.css";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

function App() {
  return (
    <div className="container">
      <main class="recipe-container">
        <img src="/image-omelette.jpeg" alt="Simple Omelette Recipe" />
        <RecipeTitle />
        <Ingredients />
        <Instructions />
      </main>
    </div>
  );
}

export default App;
