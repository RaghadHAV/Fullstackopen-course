import React from "react";
import Parts from "./Parts";

const Content = ({ course }) => {
  console.log("this is from the Contente" + course.name);
  return <Parts course={course} />;
};

export default Content;
