import { useState } from "react";
import CategorySelection from "./conponents/CategorySelection";
import TranslateWords from "./conponents/TranslateWords";
import TranslateExpressions from "./conponents/TranslateExpressions";
import WordMeaning from "./conponents/WordMeaning";

import "./App.css";

function App() {
  const [category, setCategory] = useState(null);

  const handleCategorySelection = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <header>
        <h2>
          Apprenez l'anglais facilement grâce a{" "}
          <span
            className="NameApp"
            onClick={() => handleCategorySelection(null)}
          >
            Englify
          </span>{" "}
          🤗
        </h2>
      </header>
      <div style={{ padding: "20px" }}>
        {!category && (
          <CategorySelection onSelectCategory={handleCategorySelection} />
        )}
        {category === "translateWords" && <TranslateWords />}
        {category === "translateExpressions" && <TranslateExpressions />}
        {category === "wordMeaning" && <WordMeaning />}
      </div>
      <footer>
        <p>Pour retrouver le createur de l'application</p>
        <ul>
          <li>
            <a href="https://github.com/Loicclau" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/loic-claude-84734a274/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
