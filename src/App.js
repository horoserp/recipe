import RecipeTitle from "./RecipeTitle";
import "./App.css";

function App() {
  return (
    <div className="container">
      <main class="recipe-container">
        <img src="/image-omelette.jpeg" alt="Simple Omelette Recipe" />
        <RecipeTitle />
      </main>
    </div>
  );
}

export default App;
