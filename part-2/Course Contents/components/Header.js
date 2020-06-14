import React from "react";

const Header = ({ course }) => {
  console.log("this is the header");
  return <h2> {course.name}</h2>;
};
export default Header;
