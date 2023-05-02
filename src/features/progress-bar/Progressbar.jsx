import React from "react";
const ProgressBar = ({ currentStep }) => {
  const progress = currentStep * 12.5
  return (
    <div className="bar-wrapper bar-container">
      <div
        className="bar"
        style={{ width: `${progress}%` }}
        data-percent={`${progress}`}
      />
    </div>
  );
};

export default ProgressBar;
