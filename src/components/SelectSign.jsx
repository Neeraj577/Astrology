import React, { useState, useEffect } from "react";
import { getSigns } from "../server/api";

const SelectSign = ({ onSignSelected }) => {
  const [signs, setSigns] = useState([]);

  useEffect(() => {
    getSigns().then(setSigns);
  }, []);
  return (
    <>
      <div className="grid">
        {signs.map((sign) => (
          <button key={sign} onClick={() => onSignSelected(sign)}>
            {sign}
          </button>
        ))}
      </div>
    </>
  );
};

export default SelectSign;
