/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const ProgressBar = (props) => {
  const { start, end, height, width, timer, bgColor } = props;
  //   const [value, setValue] = useState(start);
  const [value, setValue] = useState(0);
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => val + 1);
    }, timer);

    if (value > 100) {
      () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <>
      <div
        className="holder border-[1px] rounded-md"
        style={{ height: height, width: width }}
      >
        <div
          className="navBg"
          style={{
            backgroundColor: `${bgColor ? bgColor : "#008000"}`,
            width: `${value <= 100 ? value + "%" : "100%"}`,
            height: "100%",
          }}
        >
          <span
            className="flex justify-center items-center"
            style={{
              width: width,
              height: "100%",
              color: `${value <= 49 ? "#000000" : "#fff"}`,
            }}
          >
            {value <= 100 ? <span>{value.toFixed()}%</span> : <span>100%</span>}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
