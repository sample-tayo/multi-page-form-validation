import React, { useState } from "react";
import PersonalInfo from "./components/personal-info/personal-info";
import SelectPlan from "./components/select-plan/select-plan";
import AddOns from "./components/add-ons/add-ons";
import Summary from "./components/summary/summary";

export default function App() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 4) {
      setStep((s) => s + 1);
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return (
          <SelectPlan
            selectedPlan={selectedPlan}
            onPlanSelect={setSelectedPlan}
          />
        );
      case 3:
        return (
          <AddOns
            selectedAddOns={selectedAddOns}
            onAddOnSelect={handleAddOnSelect}
          />
        );
      case 4:
        return (
          <Summary
            selectedPlan={selectedPlan}
            selectedAddOns={selectedAddOns}
          />
        );
      default:
        return null;
    }
  };

  function handleAddOnSelect(addOn) {
    setSelectedAddOns((prevSelectedAddOns) => {
      const isAlreadySelected = prevSelectedAddOns.some(
        (item) => item.id === addOn.id
      );
      if (isAlreadySelected) {
        return prevSelectedAddOns.filter((item) => item.id !== addOn.id);
      } else {
        return [...prevSelectedAddOns, addOn];
      }
    });
  }

  return (
    <div className="App">
      <div className="sideBar">
        <SideBar currentStep={step} />
      </div>
      <div className="content">
        <div className={step >= 1 ? "active" : ""}>{renderStep()}</div>

        <div className="btnContainer">
          <Button
            onClick={handlePrevious}
            visibility={step === 1 ? "hidden" : ""}
            bgColor="transparent"
            textColor="var(--CoolGray)"
          >
            Go Back
          </Button>
          <Button onClick={handleNext}>
            {step <= 3 ? "Next Step" : "Confirm"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function SideBar({ currentStep }) {
  return (
    <div className="stepsContainer">
      <div className={currentStep === 1 ? "steps active" : "steps"}>
        <div class="circle">1</div>
        <div className="stepLevelContent">
          <p>STEP 1</p>
          <span>YOUR INFO</span>
        </div>
      </div>
      <div className={currentStep === 2 ? "steps active" : "steps"}>
        <div class="circle">2</div>
        <div className="stepLevelContent">
          <p>STEP 2</p>
          <span>SELECT PLAN</span>
        </div>
      </div>
      <div className={currentStep === 3 ? "steps active" : "steps"}>
        <div class="circle">3</div>
        <div className="stepLevelContent">
          <p>STEP 3</p>
          <span>ADD-ONS</span>
        </div>
      </div>
      <div className={currentStep === 4 ? "steps active" : "steps"}>
        <div class="circle">4</div>
        <div className="stepLevelContent">
          <p>STEP 4</p>
          <span>SUMMARY</span>
        </div>
      </div>
    </div>
  );
}

function Button({ visibility, textColor, bgColor, onClick, children }) {
  const defaultStyles = {
    padding: "12px 20px",
    backgroundColor: "var(--PurplishBlue)",
    color: "var(--White)",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    // height: "3rem",
  };

  const buttonStyles = Object.assign({}, defaultStyles, {
    backgroundColor: bgColor || defaultStyles.backgroundColor,
    color: textColor || defaultStyles.color,
    visibility: visibility || defaultStyles.visibility,
  });

  return (
    <button style={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}
