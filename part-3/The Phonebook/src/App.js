import React, { useState, useEffect } from "react";
import Persons from "./components/Persons.js";
import AddPerson from "./components/AddPerson";
import FilterName from "./components/FilterName";
import noteService from "./services/backend";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [Filter, setFilter] = useState(persons);
  const [successMsg, setSuccessMsge] = useState("");
  useEffect(() => {
    noteService.getAll().then((intialResponse) => {
      setPersons(intialResponse);
      setFilter(intialResponse);
    });
  }, []);
 
  const AddItem = (event) => {
    event.preventDefault();

    const newObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    console.log(newObject);
    const found = persons.some((person) => person.name === newName);
    console.log("found here is " + found);
    
    const differentNo = persons.some(
      (person) => person.name === newName && person.number !== newNumber
    );

    if (!found && newName !== "" && newNumber !== "") {
      const newpersons = persons.concat(newObject);
      setPersons(newpersons);
      console.log(newpersons);
      noteService.create(newObject).then((intialResponse) => {
        console.log(intialResponse);
      });

      setNewName("");
      setNewNumber("");
      setFilter(newpersons);

      setSuccessMsge(`${newName} Added Successfully`);
    } else if (differentNo) {
      var requiredID = 1;
      alert(` Updating number of ${newName}?`);
      persons.map((person) => {
        if (person.name === newName && person.number !== newNumber) {
          requiredID = person.id;
        }
      });
      console.log(`${requiredID} req id`);
      noteService.update(requiredID, newObject);
    } else if ((newName === "") | (newNumber === " ")) {
      alert(`You need to add something`);
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
    setSuccessMsge("");
    setFilter(
      persons.filter((person) => person.name.indexOf(event.target.value) !== -1)
    );
    console.log(event.target.value);
  };
  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete ${id}?`)) {
      noteService.deleteItem(id).then((intialResponse) => {
        console.log(intialResponse);
      });
    }
  };
  const Notification = ({ msg }) => {
    if (msg === "") return null;
    else return <div className="success">{msg}</div>;
  };
  return (
    <div>
      <h2 className="main-title">Phonebook</h2>
      <Notification msg={successMsg} />

      <FilterName handleFilter={handleFilter} />
      <h3>Add New Contact</h3>
      <AddPerson
        AddItem={AddItem}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>All Added Contacts</h3>
    
      <div>
        <ul>
          {Filter.map((person) => (
            <Persons
              key={person.id}
              person={person}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
