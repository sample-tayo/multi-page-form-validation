import React from "react";
import "./select-plan.css";

export default function SelectPlan({
  activePlan,
  activeTab,
  setActivePlan,
  setActiveTab,
}) {
  // const [activeTab, setActiveTab] = useState("Monthly");
  // const [activePlan, setActivePlan] = useState("Arcade");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(tab);
  };

  const handlePlanClick = (plan) => {
    setActivePlan(plan);
    console.log(plan);
  };

  const getPriceForArcade = (tab) => {
    return tab === "Monthly" ? "9" : "90";
  };

  const getPriceForAdvance = (tab) => {
    return tab === "Monthly" ? "12" : "120";
  };

  const getPriceForPro = (tab) => {
    return tab === "Monthly" ? "15" : "150";
  };

  return (
    <div>
      <div className="page-01-text">
        <h4>Select your plan</h4>
        <p>You have the option of monthly or yearly billing</p>
      </div>

      <div className="optionContainer">
        <div class="radio-inputs">
          <label>
            <input
              class="radio-input"
              type="radio"
              name="plan"
              checked={activePlan === "Arcade"}
              onChange={() => handlePlanClick("Arcade")}
            />
            <span class="radio-tile">
              <span class="radio-icon">
                <img src="./assets/images/icon-arcade.svg" alt="" />
              </span>
              <span class="radio-label">
                <span>Arcade</span>
                <span className="price">
                  ${getPriceForArcade(activeTab)}/
                  {activeTab === "monthly" ? "mo" : "yr"}
                </span>
                <span>{activeTab !== "Monthly" && "2 months free"}</span>
              </span>
            </span>
          </label>

          <label>
            <input
              class="radio-input"
              type="radio"
              name="plan"
              checked={activePlan === "Advanced"}
              onChange={() => handlePlanClick("Advanced")}
            />
            <span class="radio-tile">
              <span class="radio-icon">
                <img src="./assets/images/icon-advanced.svg" alt="" />
              </span>
              <span class="radio-label">
                <span>Advanced</span>
                <span className="price">
                  ${getPriceForAdvance(activeTab)}/
                  {activeTab === "monthly" ? "mo" : "yr"}
                </span>
                <span>{activeTab !== "Monthly" && "2 months free"}</span>
              </span>
            </span>
          </label>

          <label>
            <input
              class="radio-input"
              type="radio"
              name="plan"
              checked={activePlan === "Pro"}
              onChange={() => handlePlanClick("Pro")}
            />
            <span class="radio-tile">
              <span class="radio-icon">
                <img src="./assets/images/icon-pro.svg" alt="" />
              </span>
              <span class="radio-label">
                <span>Pro</span>
                <span className="price">
                  ${getPriceForPro(activeTab)}/
                  {activeTab === "monthly" ? "mo" : "yr"}
                </span>
                <span>{activeTab !== "Monthly" && "2 months free"}</span>
              </span>
            </span>
          </label>
        </div>

        <div className="tab-container">
          <button
            className={`tab tab--1 ${activeTab === "Monthly" ? "active" : ""}`}
            onClick={() => handleTabClick("Monthly")}
            style={{ fontSize: "1.3rem" }}
          >
            Monthly
          </button>
          <button
            className={`tab tab--2 ${activeTab === "Yearly" ? "active" : ""}`}
            onClick={() => handleTabClick("Yearly")}
            style={{ fontSize: "1.3rem" }}
          >
            Yearly
          </button>
          <div
            className="indicator"
            style={{ left: activeTab === "Yearly" ? "50%" : "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
