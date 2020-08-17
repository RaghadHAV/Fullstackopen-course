import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      {course.map((c) => (
        <div key={c.id}>
          <Header course={c} />
          <Content course={c} />
          <Total course={c} />
        </div>
      ))}
    </div>
  );
};

export default Course;
