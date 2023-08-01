import React from "react";
import "./summary.css";

export default function Summary({
  activePlan,
  activeTab,
  setStep,
  selectedAddOns,
  addOnsData,
}) {
  const handleChangePlanButton = () => {
    setStep(2);
  };

  function getPriceById(addOnId) {
    const addOn = addOnsData.find((item) => item.id === addOnId);
    return addOn ? addOn.price : "Price not found";
  }

  // Calculate the total price
  const getTotalPrice = () => {
    const addOnPrices = selectedAddOns.map((addOn) => {
      const addOnData = addOnsData.find((item) => item.id === addOn);
      return addOnData ? parseFloat(getPriceById(addOn)) : 0;
    });

    const totalAddOnPrice = addOnPrices.reduce(
      (total, price) => total + price,
      0
    );

    const planPrice = parseFloat(getPrice(activeTab, activePlan));

    return (totalAddOnPrice + planPrice).toFixed(2);
  };

  function getPrice(tab, plan) {
    const formattedTab = tab.toLowerCase();
    if (formattedTab === "monthly" && plan === "Arcade") {
      return "9";
    } else if (formattedTab === "yearly" && plan === "Arcade") {
      return "90";
    } else if (formattedTab === "monthly" && plan === "Advanced") {
      return "12";
    } else if (formattedTab === "yearly" && plan === "Advanced") {
      return "120";
    } else if (formattedTab === "monthly" && plan === "Pro") {
      return "15";
    } else if (formattedTab === "yearly" && plan === "Pro") {
      return "150";
    } else {
      return "";
    }
  }

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
            {activeTab === "Monthly" ? "mo" : "yr"}
          </p>
        </div>

        <div className="line"></div>
        <div className="selectedAddOn">
          <ul>
            {selectedAddOns.map((addOn) => {
              const addOnData = addOnsData.find((item) => item.id === addOn);
              return (
                <li key={addOn}>
                  <p style={{ fontSize: "1.5rem", color: "var(--CoolGray)" }}>
                    {addOnData ? addOnData.name : ""}
                  </p>
                  <p
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "500",
                      color: "var(--MarineBlue)",
                    }}
                  >
                    +${getPriceById(addOn)}/
                    {activeTab === "Monthly" ? "mo" : "yr"}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="total">
        <p style={{ fontSize: "1.5rem", color: "var(--CoolGray)" }}>
          Total ({activeTab === "Monthly" ? "per month" : "per year"})
        </p>
        <p
          style={{
            fontSize: "1.7rem",
            fontWeight: "600",
            color: "var(--PurplishBlue)",
          }}
        >
          ${getTotalPrice()}/{activeTab === "Monthly" ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
}
