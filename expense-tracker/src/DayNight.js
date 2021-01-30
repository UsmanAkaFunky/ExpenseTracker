import React from "react";
import Color from "./Components/Color";

function DayNight(props) {
  return (
    <div>
      <h3>Have a good {props.timeIs ? "Morning" : "Night"}</h3>
      <Color setColorz={props.timeIs} />
    </div>
  );
}

export default DayNight;
