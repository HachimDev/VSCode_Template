import React from "react";

const DivTechno = ({ logo, label }) => {
  return (
    <div className="flex flex-row mb-3">
      <img
        src={logo}
        alt="React Logo"
        className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
      />
      <code>{label}</code>
    </div>
  );
};

export default DivTechno;
