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
          <div
            key={addOn.id}
            className="add-on-item"
            style={{
              backgroundColor: selectedAddOns.includes(addOn.id)
                ? "var(--Magnolia)"
                : "",
              borderColor: selectedAddOns.includes(addOn.id)
                ? "var(--PurplishBlue)"
                : "",
            }}
          >
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
                <p style={{ color: "var(--MarineBlue)" }}>{addOn.name}</p>
                <span style={{ color: "var(--CoolGray)" }}>
                  {addOn.description}
                </span>
              </span>

              <span className="add-on-price">
                <span
                  style={{ color: "var(--PurplishBlue)", fontSize: "1.4rem" }}
                >
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
