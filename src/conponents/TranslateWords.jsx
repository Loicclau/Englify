import React, { useState } from "react";

function TranslateWords() {
  const mots = [
    { francais: "Boulangerie", anglais: "Bakery" },
    { francais: "Blé", anglais: "Wheat" },
    { francais: "Blasée", anglais: "jaded" },
    { francais: "Poivre", anglais: "pepper" },
    { francais: "Piment", anglais: "chili pepper" },
    { francais: "Un lien", anglais: "a link" },
    { francais: "Improbable", anglais: "unlikely" },
    { francais: "Chaussons", anglais: "slipper" },
    { francais: "Sagesse", anglais: "wisdom" },
    { francais: "Sage", anglais: "wise" },
    { francais: "Membre (du corps)", anglais: "limb" },
    { francais: "Un lâche", anglais: "a Coward" },
    { francais: "Nombreux", anglais: "numerous" },
    { francais: "Four", anglais: "Oven" },
    { francais: "Machine a laver", anglais: "DishWasher" },
    { francais: "Un rechaud (plaque)", anglais: "A stove" },
    { francais: "bouillir", anglais: "Boil" },
    { francais: "Nain", anglais: "Dwarf" },
    { francais: "Naine", anglais: "Dwarfess" },
    { francais: "Joncher (le sol)", anglais: "litter" },
    { francais: "Répandre", anglais: "spread" },
    { francais: "Engendrer", anglais: "begotten" },
    { francais: "Offrir", anglais: "offer" },
    { francais: "Faire une offre", anglais: "To bid" },
    { francais: "Humilier", anglais: "Humiliate" },
    { francais: "Humiliation", anglais: "humbling" },
    { francais: "Soutenir", anglais: "Sustain" },
    { francais: "Bien que", anglais: "although" },
    { francais: "Tondeuse", anglais: "Mower" },
    { francais: "Tondeuse a gazon", anglais: "Lawn mower" },
    { francais: "Emprunter", anglais: "Borrow" },
    { francais: "Touristique", anglais: "Sightseeing" },
    { francais: "Croisière Touristique", anglais: "Sightseeing Cruise" },
    { francais: "Assister à", anglais: "To Attend" },
    { francais: "Participant", anglais: "attendees" },
    { francais: "Logement", anglais: "housing" },
    { francais: "Appartement", anglais: "flat" },
    { francais: "D'une manière ou d'une autre", anglais: "somehow" },
    { francais: "Viande hachée", anglais: "Ground meat" },
    { francais: "Avortement", anglais: "Abortion" },
    { francais: "Placard en US", anglais: "Closet" },
    { francais: "Placard en UK", anglais: "cupboard" },
    { francais: "Se débarrasser de", anglais: "Get rid of" },
    { francais: "Se rejouir", anglais: "Be delighted" },
    { francais: "Navigué (en mer)", anglais: "Sailed" },
    { francais: "Voisin", anglais: "Neighbor" },
    { francais: "S'accrocher", anglais: "To cling" },
    { francais: "Atterrir", anglais: "Land" },
    { francais: "Idiot", anglais: "Silly" },
    { francais: "Fou", anglais: "fool" },
    { francais: "Depasser", anglais: "Exceed" },
    { francais: "Cuir", anglais: "Leather" },
    { francais: "Plume", anglais: "Feather" },
    { francais: "Fade (nourriture)", anglais: "Bland" },
    { francais: "Démoniaque", anglais: "fiending" },
    { francais: "Brochure", anglais: "leaflet" },
    { francais: "Demission", anglais: "Resignation" },
    { francais: "Neveu", anglais: "nephew" },
    { francais: "Couturier", anglais: "tailor" },
    { francais: "Terrible ou affreux", anglais: "awful" },
    { francais: "Fondre", anglais: "Melt" },
    { francais: "A l'etranger", anglais: "abroad" },
    { francais: "Miteux", anglais: "Shabby" },
    { francais: "Heureusement", anglais: "Fortunately" },
    { francais: "Etonnée", anglais: "Amazed" },
    { francais: "Fondre", anglais: "Melt" },
    { francais: "A l'etranger", anglais: "abroad" },
    { francais: "Poussière", anglais: "Dust" },
    { francais: "Balais", anglais: "Brooms" },
    { francais: "Agenda", anglais: "diary" },
    { francais: "Sciure", anglais: "Sawdust" },
    { francais: "Pleurer (verbe irregulier)", anglais: "weep" },
    { francais: "J'espère", anglais: "I hope" },
    { francais: "Fuir", anglais: "Flee" },
    { francais: "Rasée", anglais: "Shaved" },
    { francais: "Sombre", anglais: "Gloomy" },
    { francais: "Un discour", anglais: "A speech" },
    { francais: "Plutôt", anglais: "rather" },
    { francais: "Ni l'un ni l'autre", anglais: "neither" },
    { francais: "Jusqu'a", anglais: "Until" },
    { francais: "Dégoûter", anglais: "Disgust" },
    { francais: "Saluer", anglais: "Greet" },
    { francais: "Retirer", anglais: "Withdraw" },
    { francais: "Valise", anglais: "Suitcase" },
    { francais: "Mallette", anglais: "Briefcase" },
    { francais: "Confiture", anglais: "Jam" },
    { francais: "Jambon", anglais: "Ham" },
    { francais: "Prison", anglais: "Jail" },
    { francais: "Rassembler", anglais: "Gather" },
    { francais: "Large", anglais: "Wide" },
    { francais: "Étroit", anglais: "Narrow" },
    { francais: "Hangar", anglais: "Shed" },
    { francais: "Mendiant", anglais: "Beggar" },
    { francais: "Mendier", anglais: "Beg" },
    { francais: "Couverture", anglais: "Blanket" },
    { francais: "Une rame", anglais: "An oar" },
    { francais: "Rivage", anglais: "Shore" },
    { francais: "S'allonger", anglais: "Lie" },
    { francais: "Un forgeron", anglais: "A blacksmith" },
    { francais: "Bondée", anglais: "Crowded" },
    { francais: "Péage", anglais: "Toll" },
    { francais: "Plat", anglais: "Dish" },
    { francais: "Repas", anglais: "Meal" },
    { francais: "Assiette", anglais: "Plate" },
    { francais: "Eviter", anglais: "Avoid" },
    { francais: "Bêche", anglais: "spade" },
  ];

  const [index, setIndex] = useState(Math.floor(Math.random() * mots.length));
  const [reponse, setReponse] = useState("");
  const [message, setMessage] = useState("");
  const [erreurs, setErreurs] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [indice, setIndice] = useState("");

  const verifierReponse = () => {
    if (reponse.toLowerCase() === mots[index].anglais.toLowerCase()) {
      setMessage("Correct, Passe a la suite !");
      setErreurs(0);
      setCorrect(true);
      setIndice("");
    } else {
      setErreurs(erreurs + 1);
      const essaisRestants = 3 - (erreurs + 1);
      if (essaisRestants <= 0) {
        setMessage(`Incorrect. La bonne réponse est : ${mots[index].anglais}`);
        setErreurs(0);
        setCorrect(true);
        setIndice("");
      } else {
        let messageErreur = `Incorrect, essayez encore. Il vous reste ${essaisRestants} essai.`;
        if (essaisRestants === 1) {
          setIndice(
            `Indice : La première lettre est " ${mots[index].anglais.charAt(
              0
            )} "`
          );
          messageErreur += ` ${indice}`;
        }
        setMessage(messageErreur);
      }
    }
  };

  const prochaineQuestion = () => {
    setIndex(Math.floor(Math.random() * mots.length));
    setReponse("");
    setMessage("");
    setErreurs(0);
    setCorrect(false);
    setIndice("");
  };

  const handleKeyDown = (e) => {
    // regarde aussi si il y a autre chose que rien dans l'input
    if (e.key === "Enter" && reponse.trim() !== "") {
      verifierReponse();
    }
  };

  return (
    <div className="container">
      <h2 className="TradJeux">
        Traduisez ce mot : <strong>{mots[index].francais}</strong>
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
      <p className="message" >
        <strong>{message}</strong>
      </p>
      {indice && <p className="hint">{indice}</p>} {/* Affichage de l'indice */}
    </div>
  );
}

export default TranslateWords;
