import React, { useState, useEffect } from "react";

function WordMeaning() {
  const significations = [
    { mot: "Jam", signification: "Confiture", significationFausse1: "Jambon", significationFausse2: "Tête" },
    { mot: "Book", signification: "Livre", significationFausse1: "Bureau", significationFausse2: "Voir" },
    { mot: "Chair", signification: "Chaise", significationFausse1: "Table", significationFausse2: "Bureau" },

    { mot: "Peculiar", signification: "Bizarre", significationFausse1: "Particulier", significationFausse2: "Étrange" },
  { mot: "Meticulous", signification: "Minutieux", significationFausse1: "Méticuleux", significationFausse2: "Détaillé" },
  { mot: "Conscientious", signification: "Consciencieux", significationFausse1: "Courageux", significationFausse2: "Précis" },
  { mot: "Humble", signification: "Modeste", significationFausse1: "Humble", significationFausse2: "Simple" },
  { mot: "Eloquent", signification: "Éloquent", significationFausse1: "Éloigné", significationFausse2: "Fluent" },
  { mot: "Amicable", signification: "Amiable", significationFausse1: "Ami", significationFausse2: "Amical" },
  { mot: "Apparent", signification: "Évident", significationFausse1: "Apparence", significationFausse2: "Appareil" },
  { mot: "Cautious", signification: "Prudent", significationFausse1: "Causé", significationFausse2: "Averti" },
  { mot: "Plausible", signification: "Crédible", significationFausse1: "Possible", significationFausse2: "Plau" },
  { mot: "Skeptical", signification: "Sceptique", significationFausse1: "Sceptique", significationFausse2: "Douteux" },
  { mot: "Metamorphosis", signification: "Métamorphose", significationFausse1: "Transformation", significationFausse2: "Méta" },
  { mot: "Ambiguous", signification: "Ambigu", significationFausse1: "Ambigu", significationFausse2: "Vague" },
  { mot: "Ephemeral", signification: "Éphémère", significationFausse1: "Éternel", significationFausse2: "Temporaire" },
  { mot: "Anomaly", signification: "Anomalie", significationFausse1: "Normal", significationFausse2: "Erreur" },
  { mot: "Vehement", signification: "Véhément", significationFausse1: "Violent", significationFausse2: "Fervent" },
  { mot: "Elusive", signification: "Insaisissable", significationFausse1: "Élucide", significationFausse2: "Élusive" },
  { mot: "Lethargic", signification: "Léthargique", significationFausse1: "Lente", significationFausse2: "Fatigué" },
  { mot: "Nostalgic", signification: "Nostalgique", significationFausse1: "Mélancolique", significationFausse2: "Sentimental" },
  { mot: "Cacophony", signification: "Cacophonie", significationFausse1: "Harmonie", significationFausse2: "Bruyant" },

  { mot: "Fan", signification: "Ventilateur", significationFausse1: "Amateur", significationFausse2: "Éventail" },
  { mot: "Utilize", signification: "Utiliser", significationFausse1: "Exploiter", significationFausse2: "Employé" },
  { mot: "Meat", signification: "Viande", significationFausse1: "Viandeux", significationFausse2: "Nourriture" },
  { mot: "Forest", signification: "Forêt", significationFausse1: "Jungle", significationFausse2: "Savane" },
  { mot: "Spark", signification: "Étincelle", significationFausse1: "Flamme", significationFausse2: "Lueur" },
  { mot: "Era", signification: "Époque", significationFausse1: "Période", significationFausse2: "Âge" },
  { mot: "Radish", signification: "Radis", significationFausse1: "Carotte", significationFausse2: "Navet" },
  { mot: "Pocket", signification: "Poche", significationFausse1: "Sac", significationFausse2: "Étui" },
  { mot: "Tape", signification: "Scotch", significationFausse1: "Colle", significationFausse2: "Bande" },
  { mot: "Smile", signification: "Sourire", significationFausse1: "Rire", significationFausse2: "Grin" },
  { mot: "Subway", signification: "Métro", significationFausse1: "Train", significationFausse2: "Tramway" },
  { mot: "Factory", signification: "Usine", significationFausse1: "Atelier", significationFausse2: "Bureau" },
  { mot: "Unemployment", signification: "Chômage", significationFausse1: "Inactivité", significationFausse2: "Pauvreté" },
  { mot: "Mother", signification: "Mère", significationFausse1: "Maman", significationFausse2: "Parent" },
  { mot: "Longtime", signification: "Longtemps", significationFausse1: "Éternel", significationFausse2: "Durée" },
  

  ];

  const [index, setIndex] = useState(Math.floor(Math.random() * significations.length));
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState("");

  const generateOptions = () => {
    const correctSignification = significations[index].signification;
    let distracteurs = significations
      .filter(item => item.signification !== correctSignification)
      .sort(() => 0.5 - Math.random()) // Mélange des distracteurs
      .slice(0, 2); // Prendre 2 distracteurs

    // Ajouter la bonne réponse aux distracteurs
    const allOptions = [correctSignification, ...distracteurs.map(item => item.signification)];
    // Mélanger toutes les options
    return allOptions.sort(() => 0.5 - Math.random());
  };

  const verifierReponse = (selectedOption) => {
    if (selectedOption === significations[index].signification) {
      setMessage("Well done !");
      setTimeout(() => {
        prochaineQuestion();
      }, 1000); // Attendre 1 seconde avant de passer à la question suivante
    } else {
      setMessage("Incorrect, essayez encore.");
    }
  };

  const prochaineQuestion = () => {
    setIndex(Math.floor(Math.random() * significations.length));
    setOptions(generateOptions());
    setMessage("");
  };

  useEffect(() => {
    setOptions(generateOptions());
  }, [index]);

  return (
    <div className="container">
      <p className="question">
        Quelle est la signification de ce mot : <strong>{significations[index].mot}</strong>
      </p>
      <div className="options-container">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => verifierReponse(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
      <p className={`message2 ${message === "Well done !" ? "correct" : ""}`}>
        <strong>{message}</strong>
      </p>
    </div>
  );
}

export default WordMeaning;
