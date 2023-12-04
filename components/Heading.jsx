import React from "react";

const Heading = ({ children }) => {
  return (
    <div>
      <h1 className="font-bold font-orbitron pb-3 text-2xl">{children}</h1>
    </div>
  );
};

export default Heading;
