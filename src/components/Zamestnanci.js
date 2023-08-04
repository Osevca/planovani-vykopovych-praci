//  <label>
//  <input type="radio" value={newPerson.gender} checked={gender === "muž"} onChange={() => setGender("muž")} />
// </label > Muž
import React, { useState } from "react";
const Zamestnanci = ({ people, addPerson, removePerson }) => {
  const [newPerson, setNewPerson] = useState({
    firstName: "",
    lastName: "",
    gender: "muž",
  });

  const handleAddPerson = () => {
    addPerson(newPerson);
    setNewPerson({ firstName: "", lastName: "", gender: "muž" });
  };

  return (
    <div className="zamestnanci">
      <h2>Zaměstnanci</h2>
      <div className="zamestnanci-form">
        <div className="zamestnanci-jmena">
          <label>Jméno:</label>
          <input
            type="text"
            value={newPerson.firstName}
            onChange={(e) =>
              setNewPerson({ ...newPerson, firstName: e.target.value })
            }
          />
        </div>
        <div className="zamestnanci-jmena">
          <label>Příjmení:</label>
          <input
            type="text"
            value={newPerson.lastName}
            onChange={(e) =>
              setNewPerson({ ...newPerson, lastName: e.target.value })
            }
          />
        </div>
        <label>Pohlaví:</label>
        <select
          value={newPerson.gender}
          onChange={(e) =>
            setNewPerson({ ...newPerson, gender: e.target.value })
          }
        >
          <option value="muž">Muž</option>
          <option value="žena">Žena</option>
        </select>
        <button
          onClick={handleAddPerson}
          disabled={!newPerson.firstName || !newPerson.lastName}
        >
          Přidat zaměstnance
        </button>
        <ul className="zamestnanci-list">
          {people.map((person, index) => (
            <li key={index} className="zamestnanci-item">
              {person.firstName} {person.lastName} - {person.gender}
              <button
                className="zamestnanci-button"
                onClick={() => removePerson(index)}
              >
                Odebrat
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Zamestnanci;
