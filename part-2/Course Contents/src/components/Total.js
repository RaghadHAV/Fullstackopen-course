import React from "react";

const Total = ({ course }) => {
  const total = course.parts.reduce(
    (prevTotal, currentTotal) => prevTotal + currentTotal.exercises,
    0
  );

  return (
    <div>
      <h4>Total of {total} exercises </h4>
    </div>
  );
};

export default Total;
