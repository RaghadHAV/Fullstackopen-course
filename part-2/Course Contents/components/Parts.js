import React from "react";
const Parts = ({ course }) => {
  return (
    <div>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name} : {part.exercises}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Parts;
