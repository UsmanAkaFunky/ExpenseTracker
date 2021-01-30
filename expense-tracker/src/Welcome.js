import React, { useState } from "react";

import DayNight from "./Components/DayNight";

function Welcome(props) {
  let [isMorning, setTime] = useState(true);

  const changeTime = () => {
    setTime(!isMorning);
  };
  return (
    <div>
      <h1>Welcome Back {props.myNameIs}..!</h1>
      <DayNight timeIs={isMorning} />
      <button onClick={() => changeTime()}> changeTime</button>
    </div>
  );
}

export default Welcome;
