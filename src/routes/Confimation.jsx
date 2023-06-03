import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

function Confirmation() {
  localStorage.clear();
  const min = 20;
  const max = 60;
  const deliveryTime = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(deliveryTime);
  return (
    <div style={{ textAlign: "center", margin: 10 }}>
      <FontAwesomeIcon icon={faBurger} flip size="2xl" />
      <h1 className="gold-text">Thank you for your purchase!</h1>
      <h1 className="gold-text">
        Your order will be delivered in {deliveryTime} mins
      </h1>
    </div>
  );
}

export default Confirmation;
