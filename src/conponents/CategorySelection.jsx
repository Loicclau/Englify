import React from "react";

function CategorySelection({ onSelectCategory }) {
  return (
    <>
      <div className="section-debut">
        <h2>Choisi une section que tu veux travailler parmit les 3 !</h2>
        <h3>Tip : reviens réviser tous les jours pour vraiment apprendre et te souvenir des mots 😉</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          className="Card"
          onClick={() => onSelectCategory("translateWords")}
        >
          <h2>Mots à traduire</h2>
        </div>
        <div
          className="Card"
          onClick={() => onSelectCategory("translateExpressions")}
        >
          <h2>Expressions anglaises</h2>
        </div>
        <div className="Card" onClick={() => onSelectCategory("wordMeaning")}>
          <h2>Signification des mots</h2>
        </div>
      </div>
    </>
  );
}

export default CategorySelection;
