import React from "react";
const AddPerson = (props) => {
  return (
    <form onSubmit={props.AddItem}>
      <div>
        Insert name:
        <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <div>
        Insert number:
        <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>

      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default AddPerson;
