import React from "react";
const Filtername = (props) => {
  return (
    <div>
      Filter shown with: <input onChange={props.handleFilter} />
    </div>
  );
};

export default Filtername;
