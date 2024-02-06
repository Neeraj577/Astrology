import React, { useState } from "react";
import SelectSign from "../components/SelectSign";
import Astrology from "../components/Astrology";
import SelectTimeFrame from "../components/SelectTimeFrame";
import "../css/horoscope.css";

const Horoscope = () => {
  const [selectSign, setSelectSign] = useState(null);
  const [selectTimeFrame, setSelectTimeFrame] = useState(null);

  const restart = () => {
    setSelectSign(null);
    setSelectTimeFrame(null);
  };

  return (
    <>
      <div className="horoscope">
        <h1> The horoscope Web Page </h1>

        {!selectSign && <SelectSign onSignSelected={setSelectSign} />}
        {selectSign && !selectTimeFrame && (
          <SelectTimeFrame onTimeFrameSelected={setSelectTimeFrame} />
        )}
        {selectSign && selectTimeFrame && (
          <Astrology sign={selectSign} timeFrame={selectTimeFrame} />
        )}
        <h3>The Selected sign:{selectSign} </h3>
        <h3>The Selected Time-Frame:{selectTimeFrame} </h3>
        <button onClick={restart}> Restart</button>
      </div>
    </>
  );
};

export default Horoscope;
