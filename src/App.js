import React, { useState } from "react";
import PersonalInfo from "./components/personal-info/personal-info";
import SelectPlan from "./components/select-plan/select-plan";
import AddOns from "./components/add-ons/add-ons";
import Summary from "./components/summary/summary";
import Final from "./components/final/Final";

export default function App() {
  const [step, setStep] = useState(1);
  const [activePlan, setActivePlan] = useState("Arcade");
  const [activeTab, setActiveTab] = useState("Monthly");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const addOnsData = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: `${activeTab === "Monthly" ? "1" : "10"}`,
      id: "onlineService",
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: `${activeTab === "Monthly" ? "2" : "20"}`,
      id: "largerStorage",
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: `${activeTab === "Monthly" ? "2" : "20"}`,
      id: "customizableProfile",
    },
  ];

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 4) {
      setStep((s) => s + 1);
    } else if (step === 4) {
      handleSubmit();
    }
  }

  function handleSubmit() {
    setStep(5);
  }

  function handleAddOnSelect(addOn) {
    setSelectedAddOns((prevSelectedAddOns) => {
      const isAlreadySelected = prevSelectedAddOns.some(
        (item) => item === addOn
      );
      if (isAlreadySelected) {
        return prevSelectedAddOns.filter((item) => item !== addOn);
      } else {
        return [...prevSelectedAddOns, addOn];
      }
    });
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return (
          <SelectPlan
            activePlan={activePlan}
            activeTab={activeTab}
            setActivePlan={setActivePlan}
            setActiveTab={setActiveTab}
          />
        );
      case 3:
        return (
          <AddOns
            selectedAddOns={selectedAddOns}
            onSelectAddOn={handleAddOnSelect}
            addOnsData={addOnsData}
            activeTab={activeTab}
          />
        );
      case 4:
        return (
          <Summary
            activePlan={activePlan}
            activeTab={activeTab}
            step={step}
            setStep={setStep}
            selectedAddOns={selectedAddOns}
            addOnsData={addOnsData}
          />
        );
      case 5:
        return <Final />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="sideBar">
        <SideBar currentStep={step} />
      </div>
      <div className="content">
        <div className={step >= 1 ? "active" : ""}>{renderStep()}</div>

        {step !== 5 && (
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
              {step === 4 ? "Confirm" : "Next Step"}
            </Button>
          </div>
        )}
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
