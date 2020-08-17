import React from "react";
const Persons = ({ person }) => {
  return (
    <div>
      <ul>
        <li>
          {person.name} {person.number}
        </li>
      </ul>
    </div>
  );
};

export default Persons;
