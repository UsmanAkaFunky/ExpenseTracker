import React from "react";

import  GlobalProvider  from "./Contexts/StudentContext";
import StudentsList from "./Components/StudentsList";
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <StudentsList />
      </div>
    </GlobalProvider>
  );
}

export default App;
