import React, { useState } from "react";
import "./add-ons.css";

export default function AddOns() {
  const [services, setServices] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setServices((prevServices) => ({
      ...prevServices,
      [name]: checked,
    }));
  };

  return (
    <div>
      <div>
        <div className="page-01-text">
          <h4>Pick add-ons</h4>
          <p>Add-ons help enhance your gaming experience</p>
        </div>

        <div className="item-container">
          <div className="add-on-item">
            <label>
              <span className="checkbox-wrapper">
                <input
                  className="checkbox-input"
                  type="checkbox"
                  name="onlineService"
                  checked={services.onlineService}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox-custom"></span>
              </span>

              <span className="add-on-label">
                <p>Online service</p>
                <span>Access to multiplayer games</span>
              </span>

              <span className="add-on-price">
                <span>10/year</span>
              </span>
            </label>
          </div>

          <div className="add-on-item">
            <label>
              <span className="checkbox-wrapper">
                <input
                  className="checkbox-input"
                  type="checkbox"
                  name="largerStorage"
                  checked={services.largerStorage}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox-custom"></span>
              </span>

              <span className="add-on-label">
                <p>Larger storage</p>
                <span>Extra 1TB of cloud save</span>
              </span>

              <span className="add-on-price">
                <span>+$2/mo</span>
              </span>
            </label>
          </div>
          <div className="add-on-item">
            <label>
              <span className="checkbox-wrapper">
                <input
                  className="checkbox-input"
                  type="checkbox"
                  name="customizableProfile"
                  checked={services.customizableProfile}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox-custom"></span>
              </span>

              <span className="add-on-label">
                <p>Customizable Profile</p>
                <span>Custom theme on your profile</span>
              </span>

              <span className="add-on-price">
                <span>+$2/mo</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
