import React, { useState } from "react";
import Page01 from "../src/page01/page01";

export default function PersonalInfo() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 5) {
      setStep((s) => s + 1);
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Page01 />;
      // Add other cases for other steps if needed
      default:
        return null;
    }
  };

  return <div></div>;
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
