import React from "react";

function Nutrition() {
  return (
    <section className="nutrition">
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additonal fillings.
      </p>
      <table>
        <tr>
          <td>Calories</td>
          <td>277kcal</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>20g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>22g</td>
        </tr>
      </table>
    </section>
  );
}

export default Nutrition;
