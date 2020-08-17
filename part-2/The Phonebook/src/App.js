import React, { useState } from "react";
import Persons from "./components/Persons.js";
import AddPerson from "./components/AddPerson";
import FilterName from "./components/FilterName";
const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [Filter, setFilter] = useState(persons);

  const AddItem = (event) => {
    event.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const found = persons.some((person) => person.name === newName);

    if (!found) {
      const newpersons = persons.concat(newObject);
      setPersons(newpersons);
      //setPersons(persons.concat(newObject));
      persons.map((person) =>
        console.log("map all persons using map " + person.name)
      );

      setNewName("");
      setNewNumber("");
      setFilter(newpersons);
      console.log("updated");
      console.log(newpersons);
    } else alert(`${newName} is already added to phonebook`);
  };
  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };
  const handleFilter = (event) => {
    setFilter(
      persons.filter((person) => person.name.indexOf(event.target.value) !== -1)
    );
    console.log(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterName handleFilter={handleFilter} />
      <h3>Add New</h3>
      <AddPerson
        AddItem={AddItem}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      {Filter.map((person) => (
        <Persons key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
