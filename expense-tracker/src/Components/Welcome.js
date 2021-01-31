import React, { useState } from "react";
 import DayNight from "./DayNight.js"

function Welcome(props) {
  let [isMorning, setTime] = useState(true);

  const changeTime = () => {
    setTime(!isMorning);
  };
  return (
    <div>
      <h1>Welcome Back {props.myNameIs}..!</h1>
      <hr/>
      <DayNight timeIs={isMorning}  />
      <hr/>
      <button onClick={() => changeTime()}> Change Time </button>
    </div>
  );
}

export default Welcome;
