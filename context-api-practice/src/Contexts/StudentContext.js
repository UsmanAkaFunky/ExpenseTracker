import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [students, setStudents] = useState(
    {
      uniqueID: 1122,
      name: "Muhammad Usman Amjad",
      fName: "Muhammad Amjad Altaf",
      session: "2016-2020",
    },
    {
      uniqueID: 1123,
      name: "Hafsa Gulzar",
      fName: "Gulzar Ahmed",
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
    }
  );
  return;
  <StudentContext.Provider value={students.length}>{props.children}</StudentContext.Provider>;
};
