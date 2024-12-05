/* eslint-disable no-unused-vars */
import React from "react";
import ProgressBar from "./Components/ProgressBar";

const App = () => {
  return (
    <>
      <div className="progressHolder w-[100vw] flex justify-center items-center mt-5">
        <ProgressBar
          height={"7vmin"}
          width={"40vw"}
          timer={100}
          // bgColor={"#A020F0"}
          start={0}
          end={100}
        />
      </div>
    </>
  );
};

export default App;
