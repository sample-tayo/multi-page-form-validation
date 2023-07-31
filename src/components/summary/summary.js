import React from "react";
import "./summary.css";

export default function Summary({ activePlan, activeTab, setStep }) {
  const handleChangePlanButton = () => {
    setStep(2);
  };

  const getPrice = (tab, plan) => {
    if (tab === "Monthly" && plan === "Arcade") {
      return "9";
    } else if (tab === "Yearly" && plan === "Arcade") {
      return "90";
    } else if (tab === "Monthly" && plan === "Advanced") {
      return "12";
    } else if (tab === "Yearly" && plan === "Advanced") {
      return "120";
    } else if (tab === "Monthly" && plan === "Pro") {
      return "15";
    } else if (tab === "Yearly" && plan === "Pro") {
      return "150";
    } else {
      return "";
    }
  };

  return (
    <div>
      <div className="page-01-text">
        <h4>Finishing up</h4>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div className="summaryContainer">
        <div className="summary">
          <div className="summaryPlan">
            <p>
              {activePlan} <span>({activeTab})</span>
            </p>
            <p className="change" onClick={handleChangePlanButton}>
              change
            </p>
          </div>

          <p>
            ${getPrice(activeTab, activePlan)}/
            {activeTab === "monthly" ? "mo" : "yr"}
          </p>
        </div>

        <div className="line"></div>
      </div>
    </div>
  );
}
