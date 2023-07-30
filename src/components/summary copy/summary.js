import React from "react";
import "./summary.css";

export default function Summary() {
  return (
    <div>
      <div className="thank-you">
        <div className="thankYouImg">
          <img src="./assets/images/icon-thank-you.svg" alt="" />
        </div>
        <h4>Thank you!</h4>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
