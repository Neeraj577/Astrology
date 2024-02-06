import React, { useState, useEffect } from "react";
import { getHoroscope } from "../server/api";

const Astrology = ({ sign, timeFrame }) => {
  const [astrology, setAstrology] = useState([]);

  useEffect(() => {
    getHoroscope(sign, timeFrame).then(setAstrology);
  }, [sign, timeFrame]);

  return (
    <>
      <h4>{astrology}</h4>
      <h3> {sign} </h3>
    </>
  );
};

export default Astrology;
