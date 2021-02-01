import React, { useContext, useState } from "react";
import { StudentContext } from "../Contexts/StudentContext";
import StudentsDetails from "./StudentsDetails";

const StudentsList = () => {
  const [name, setName] = useState("Ali");
  const [id, setId] = useState(22235);

  const [students, setStudents] = useContext(StudentContext);

  const addNewName = () => {
    setStudents(() => [...students, { name: name, uniqueID: id }]);
  };

  return (
    <div>
      {students.map((student) => (
        <StudentsDetails name={student.name} id={student.uniqueID} />
      ))}
      <button onClick={() => addNewName()}> Add New Name</button>
      <h1>{students.length}</h1>
    </div>
  );
};

export default StudentsList;
