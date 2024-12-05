/* eslint-disable no-unused-vars */
import React from "react";
import ProgressBar from "./Components/ProgressBar";

const App = () => {
  return (
    <>
      <ProgressBar
        height={"7vmin"}
        width={"70vh"}
        timer={100}
        // bgColor={"#000000"}
        start={0}
        end={100}
      />
    </>
  );
};

export default App;
