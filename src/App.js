import RecipeTitle from "./RecipeTitle";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div class="recipe-container">
        <img src="/image-omelette.jpeg" alt="Simple Omelette Recipe" />
        <RecipeTitle />
      </div>
    </div>
  );
}

export default App;
