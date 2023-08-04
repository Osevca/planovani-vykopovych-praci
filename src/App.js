import React, { useState } from "react";
import "./App.css";
import Zamestnanci from "./components/Zamestnanci";
import Ukol from "./components/Ukol";

function App() {
  const [people, setPeople] = useState([]);
  const [activeTab, setActiveTab] = useState("zamestnanci"); // Přidáme stav pro aktivní záložku

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  const removePerson = (index) => {
    const updatedPeople = [...people];
    updatedPeople.splice(index, 1);
    setPeople(updatedPeople);
  };

  return (
    <div className="App">
      <h1>Plánování výkopových prací</h1>
      <div className="tab-buttons">
        {" "}
        {/* Tlačítka pro přepínání mezi záložkami */}
        <button onClick={() => setActiveTab("zamestnanci")}>Zaměstnanci</button>
        <button onClick={() => setActiveTab("ukol")}>Úkol</button>
      </div>
      {activeTab === "zamestnanci" && ( // Podmínka pro zobrazení obsahu záložky "Zaměstnanci"
        <Zamestnanci
          people={people}
          addPerson={addPerson}
          removePerson={removePerson}
        />
      )}
      {activeTab === "ukol" && ( // Podmínka pro zobrazení obsahu záložky "Úkol"
        <Ukol people={people} />
      )}
    </div>
  );
}

export default App;
