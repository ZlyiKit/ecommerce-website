import React from "react";
import "../styles/ProgressBar.css";

const steps = ["Select Items", "Review cart", "Pay", "Survey"];

const fillMap = {
  1: 20,
  2: 40,
  3: 60,
  4: 80,
};

export default function ProgressBar({ currentStep = 1 }) {
  const fillPercent = fillMap[currentStep] ?? 0;

  return (
    <div className="progress-wrapper">
      <div className="progress-line" />
      <div
        className="progress-filled"
        style={{ width: `${fillPercent}%` }}
      />
      <div className="progress-steps">
        {steps.map((label, index) => (
          <div
            key={index}
            className={`step ${index + 1 <= currentStep ? "active" : ""}`}
          >
            <div className="circle">{index + 1}</div>
            <span className="label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

