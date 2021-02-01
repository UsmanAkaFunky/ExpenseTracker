import React, { createContext, useReducer, useState } from "react";
import { AppReducer } from "./AppReducer";



export const StudentContext = createContext();

export const GloalProvider = (props) => {
  const [students, setStudents] = useState([
    {
      uniqueID: 1122,
      name: "Muhammad Usman Amjad",
      fName: "Muhammad Amjad Altaf",
      session: "2016-2020",
    },

    {
      uniqueID: 1124,
      name: "Funky Bhai",
      fName: "Muhammad Amjad Altaf",
      session: "2016-2020",
    },
    {
      uniqueID: 1126,
      name: "Hamza ",
      fName: "Muhammad Usman",
      session: "2016-2020",
    },
  ]);
  return (
    <StudentContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentContext.Provider>
  );
};


export default GloalProvider;
