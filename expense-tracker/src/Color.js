import React from "react";

function Color(props) {
  return (
    <div
      style={{
        widht: "10%",
        height: "50vh",
        backgroundColor: props.setColorz ? "#f5b973" : "#7b8993",
      }}
    ></div>
  );
}

export default Color;
