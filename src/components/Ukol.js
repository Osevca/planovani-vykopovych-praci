import React, { useState, useEffect } from "react";

const Ukol = ({ people }) => {
  const [requiredMeters, setRequiredMeters] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [isConditionsMet, setIsConditionsMet] = useState(false);

  useEffect(() => {
    const totalMeters = people.reduce(
      (total, person) =>
        total +
        (person.gender === "muž" ? 1 : person.gender === "žena" ? 0.5 : 0),
      0
    );

    const totalMuzi = people.filter((person) => person.gender === "muž").length;
    const totalZeny = people.filter(
      (person) => person.gender === "žena"
    ).length;

    const availableWorkMuzi = totalMuzi;
    const availableWorkZeny = totalZeny * 0.5;
    const availableWork = availableWorkMuzi + availableWorkZeny; // Celková pracovní síla

    const requiredWork = requiredMeters / (timeLimit * 1); // Požadovaná pracovní kapacita
    setIsConditionsMet(requiredWork <= availableWork);
  }, [people, requiredMeters, timeLimit]);

  return (
    <div className="ukol-container">
      <h2>Úkol</h2>
      <div className="ukol-info">
        <p>
          Počet dostupných mužů:{" "}
          {people.filter((person) => person.gender === "muž").length}
        </p>
        <p>
          Počet dostupných žen:{" "}
          {people.filter((person) => person.gender === "žena").length}
        </p>
      </div>
      <div className="ukol-inputs">
        <label>Požadované metry:</label>
        <input
          type="number"
          value={requiredMeters}
          onChange={(e) => setRequiredMeters(parseInt(e.target.value))}
        />
      </div>
      <div className="ukol-inputs">
        <label>Časový limit (hodiny):</label>
        <input
          type="number"
          value={timeLimit}
          onChange={(e) => setTimeLimit(parseInt(e.target.value))}
        />
      </div>
      <button
        className={`naplanovat-button ${isConditionsMet ? "green" : "red"}`}
        disabled={!isConditionsMet}
      >
        Naplánovat práci
      </button>
    </div>
  );
};

export default Ukol;
