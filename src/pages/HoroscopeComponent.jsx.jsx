import React, { useState, useEffect } from "react";
import SelectSign from "../components/SelectSign";
import Astrology from "../components/Astrology";
import SelectTimeFrame from "../components/SelectTimeFrame";

const HoroscopeComponent = () => {
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [selectSign, setSelectSign] = useState(null);
  const [selectTimeFrame, setSelectTimeFrame] = useState(null);

  const restart = () => {
    setSelectSign(null);
    setSelectTimeFrame(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://sandipbgt.com/theastrologer/api/horoscope/${selectSign}/${selectTimeFrame}`
        );
        const data = await response.json();
        setHoroscopeData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {!selectSign && <SelectSign onSignSelected={setSelectSign} />}
      {selectSign && !selectTimeFrame && (
        <SelectTimeFrame onTimeFrameSelected={setSelectTimeFrame} />
      )}
      {selectSign && selectTimeFrame && (
        <Astrology sign={selectSign} timeFrame={selectTimeFrame} />
      )}
      {horoscopeData ? (
        <div>
          <h2>{horoscopeData.sunsign} Horoscope</h2>
          <p>Date: {horoscopeData.date}</p>
          <p>{horoscopeData.horoscope}</p>
          <p>Mood: {horoscopeData.meta.mood}</p>
          <p>Keywords: {horoscopeData.meta.keywords}</p>
          <p>Intensity: {horoscopeData.meta.intensity}</p>
          <button onClick={restart}>Click here to Choose annother sign.</button>
          <h3>The Selected sign:{selectSign} </h3>
          <h3>The Selected Time-Frame:{selectTimeFrame} </h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HoroscopeComponent;
