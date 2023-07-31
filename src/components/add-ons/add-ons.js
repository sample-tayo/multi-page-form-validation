import React from "react";
import "./add-ons.css";

export default function AddOns({
  selectedAddOns,
  onSelectAddOn,
  addOnsData,
  activeTab,
}) {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    onSelectAddOn(name);
  };

  return (
    <div>
      <div className="page-01-text">
        <h4>Pick add-ons</h4>
        <p>Add-ons help enhance your gaming experience</p>
      </div>

      <div className="item-container">
        {addOnsData.map((addOn) => (
          <div key={addOn.id} className="add-on-item">
            <label>
              <span className="checkbox-wrapper">
                <input
                  className="checkbox-input"
                  type="checkbox"
                  name={addOn.id}
                  checked={selectedAddOns.includes(addOn.id)}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox-custom"></span>
              </span>

              <span className="add-on-label">
                <p>{addOn.name}</p>
                <span>{addOn.description}</span>
              </span>

              <span className="add-on-price">
                <span>
                  +${addOn.price}/{activeTab === "Monthly" ? "mo" : "yr"}
                </span>
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
