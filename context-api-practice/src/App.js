import React from "react";

import { StudentProvider } from "./Contexts/StudentContext";
import StudentsList from "./Components/StudentsList";
function App() {
  return (
    <StudentProvider>
      <div className="App">
      <StudentsList/>
      </div>
    </StudentProvider>
  );
}

export default App;
