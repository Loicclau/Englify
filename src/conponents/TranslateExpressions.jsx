import React, { useState } from "react";

function TranslateExpressions() {
  const expressions = [
    { francais: "Coup de foudre", anglais: "Love at first sight" },
    { francais: "Mettre la table", anglais: "lay the table" },
    { francais: "Ferme la", anglais: "zip it" },
    {
      francais: "Si tu voit je que je veux dire",
      anglais: "if you catch my drift",
    },
    { francais: "Je suis habitué", anglais: "I am used to it" },
    { francais: "Tu le mérites", anglais: "You deserve it" },
    { francais: "Dire adieu", anglais: "to bid you farewell" },
    { francais: "Que dirait tu de faire", anglais: "How about" },
    { francais: "Rien de nouveau", anglais: "same old same old" },
    { francais: "J'ai fait ça exprès", anglais: "I did this on purpose" },
    { francais: "Plus entre mes mains", anglais: "No longer in my hands" },
    { francais: "Ce n'est pas sorcier", anglais: "It is not rocket science" },
    {
      francais: "Mieux vaut prevenir que guérir",
      anglais: "better safe than sorry",
    },
    { francais: "Tu m'en dois une", anglais: "You owe me one" },
    { francais: "Ma parole est d'or", anglais: "My word is bond" },
    { francais: "C'est la vie", anglais: "That's life" },
    {
      francais: "L'habit ne fait pas le moine",
      anglais: "Clothes don't make the man",
    },
    { francais: "En avoir ras le bol", anglais: "To be fed up" },
    {
      francais: "Être dans la lune",
      anglais: "To be in the moon",
    },
    {
      francais: "Faire d'une pierre deux coups",
      anglais: "Kill two birds with one stone",
    },
    { francais: "Tomber dans les pommes", anglais: "To pass out" },
    { francais: "Appeler un chat un chat", anglais: "Call a spade a spade" },
  ];

  const [index, setIndex] = useState(
    Math.floor(Math.random() * expressions.length)
  );
  const [reponse, setReponse] = useState("");
  const [message, setMessage] = useState("");
  const [erreurs, setErreurs] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [indice, setIndice] = useState("");

  const verifierReponse = () => {
    if (reponse.toLowerCase() === expressions[index].anglais.toLowerCase()) {
      setMessage("Correct, Passe a la suite !");
      setErreurs(0);
      setCorrect(true);
      setIndice("");
    } else {
      setErreurs(erreurs + 1);
      const essaisRestants = 3 - (erreurs + 1);

      if (essaisRestants <= 0) {
        setMessage(
          `Incorrect. La bonne réponse est : ${expressions[index].anglais}`
        );
        setErreurs(0);
        setCorrect(true);
        setIndice("");
      } else {
        let messageErreur = `Incorrect, essayez encore. Il vous reste ${essaisRestants} essai(s).`;
        if (essaisRestants === 1) {
          // Obtenez le premier mot de l'expression en français
          const premierMot = expressions[index].anglais.split(" ")[0];
          setIndice(`Indice : Le premier mot est "${premierMot}"`);
          messageErreur += ` ${indice}`;
        }
        setMessage(messageErreur);
      }
    }
  };

  const prochaineQuestion = () => {
    setIndex(Math.floor(Math.random() * expressions.length));
    setReponse("");
    setMessage("");
    setErreurs(0);
    setCorrect(false);
    setIndice("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && reponse.trim() !== "") {
      verifierReponse();
    }
  };

  return (
    <div className="container">
      <h2 className="TradJeux">
        Traduisez cette expression :{" "}
        <strong>{expressions[index].francais}</strong>
      </h2>
      <input
        type="text"
        value={reponse}
        onChange={(e) => setReponse(e.target.value)}
        onKeyDown={handleKeyDown} // Gère l'événement Enter
        placeholder="Entrez la traduction en anglais"
        className="input-field"
      />
      <div className="button-container">
        <button
          onClick={verifierReponse}
          disabled={reponse.trim() === ""}
          className={`button verify-button ${
            reponse.trim() === "" ? "disabled" : ""
          }`}
        >
          Vérifier
        </button>
        <button
          onClick={prochaineQuestion}
          className={`button next-button ${correct ? "correct" : ""}`}
        >
          Prochaine question
        </button>
      </div>
      <p className="message">
        <strong>{message}</strong>
      </p>
      {indice && <p className="hint">{indice}</p>} {/* Affichage de l'indice */}
    </div>
  );
}

export default TranslateExpressions;
