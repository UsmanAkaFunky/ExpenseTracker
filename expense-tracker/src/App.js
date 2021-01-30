import React, { useState } from "react";
// import Color from "./Components/Color.js";
import Welcome from "./Components/Welcome.js";
// import DayNight from "./Components/DayNight.js";

function App() {
  let [isMyName, setMyName] = useState("Muhammad Usman Amjad");
  const changeMyName = () => {
    setMyName(
      isMyName === "Muhammad Usman Amjad"
        ? "Funky Bhai "
        : "Muhammad Usman Amjad"
    );
  };
  return (
    <div>
      <Welcome myNameIs={isMyName} />
      <button onClick={() => changeMyName()}> Change My Name</button>
    </div>
  );
}

export default App;
