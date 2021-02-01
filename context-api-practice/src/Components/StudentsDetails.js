import React from "react";
const StudentsDetails = ({ name, id }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{id}</h4>
    </div>
  );
};
export default StudentsDetails;
