import React from "react";

const SelectTimeFrame = ({ onTimeFrameSelected }) => {
  return (
    <>
      <h3>Please Select the time Frame:</h3>
      <div className="grid">
        {["yesterday", "today", "tomorrow"].map((timeFrame) => (
          <button
            key={timeFrame}
            onClick={() => onTimeFrameSelected(timeFrame)}
          >
            {timeFrame}
          </button>
        ))}
      </div>
    </>
  );
};

export default SelectTimeFrame;
