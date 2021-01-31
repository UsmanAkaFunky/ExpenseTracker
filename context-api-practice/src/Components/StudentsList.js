import React, { useContext } from "react";
import { StudentContext } from "../Contexts/StudentContext";

function StudentsList() {
  const value = useContext(StudentContext);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}

export default StudentsList;
