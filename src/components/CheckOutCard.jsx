import React from "react";
import { useNavigate } from "react-router-dom";
import mastercardVisa from "../images/mastercardVisa.png";
import swish from "../images/Swish.png";
import { useState } from "react";
import { PaymentManager } from "../services/PaymentManager";

function CheckOutCard() {
  const [isChosenCreditCard, setIsChosenCreditCard] = useState(true);
  const [payment, setPayment] = useState({
    firstname: "",
    lastname: "",
    address: "",
    streetnum: "",
    postalcode: "",
    city: "",
    creditcardnum: "",
    cvc: "",
  });
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function updateFirstName(e) {
    const firstName = e.target.value;
    setPayment({ ...payment, firstname: firstName });
  }
  function updateLastName(e) {
    const lastname = e.target.value;
    setPayment({ ...payment, lastname });
  }
  function updateAddress(e) {
    const address = e.target.value;
    setPayment({ ...payment, address });
  }
  function updateStreetNumber(e) {
    const streetnum = e.target.value;
    setPayment({ ...payment, streetnum });
  }
  function updatePostalCode(e) {
    const postalcode = e.target.value;
    setPayment({ ...payment, postalcode });
  }
  function updateCity(e) {
    const city = e.target.value;
    setPayment({ ...payment, city });
  }
  function updateCreditCard(e) {
    const creditcardnum = e.target.value;
    setPayment({ ...payment, creditcardnum });
  }
  function updateCvc(e) {
    const cvc = e.target.value;
    setPayment({ ...payment, cvc });
  }
  function updateMobileNumber(e) {
    const number = e.target.value;
    setMobileNumber(number);
  }

  function handleCardSubmit() {
    const isPaymentOk = PaymentManager.authorizePayment({ payment });
    if (isPaymentOk) {
      navigate("/confirmation");
    } else {
      setErrorMessage("Something went wrong...");
    }
  }

  function handleSwishSubmit() {
    const isSwishOk = PaymentManager.checkMobileNumber(mobileNumber);

    if (isSwishOk) {
      navigate("/confirmation");
    } else {
      setErrorMessage("Something went wrong...");
    }
  }
  function handlePaymentSelection(e) {
    const value = e.target.value;
    if (value === "true") {
      setIsChosenCreditCard(true);
      setErrorMessage("");
    } else {
      setIsChosenCreditCard(false);
      setErrorMessage("");
    }
  }
  if (isChosenCreditCard === true) {
    return (
      <div className="checkout-container">
        <div className="checkout-section">
          <div className="radio-container">
            <div className="radio-item">
              <label className="black-text">Choose Payment</label>
              <div className="input-row">
                <label className="radio-label black-text" htmlFor="Card">
                  <input
                    value="true"
                    name="Payment"
                    type="radio"
                    checked={isChosenCreditCard} // Updated attribute
                    onChange={handlePaymentSelection}
                  />
                  Card
                </label>
                <label className="radio-label black-text" htmlFor="Swish">
                  <input
                    value="false"
                    name="Payment"
                    type="radio"
                    onChange={handlePaymentSelection}
                  />
                  Swish
                </label>
              </div>
            </div>
          </div>
          <div className="checkout-item">
            <div className="input-container">
              <img
                className="paymentIcon"
                src={mastercardVisa}
                alt="Mastercard or Visa"
              />
              <div className="input-group ">
                <h3 style={{ color: "red" }}>{errorMessage}</h3>
                <div className="input-row">
                  <input
                    id="firstname-input"
                    type="text"
                    placeholder="Firstname *"
                    onChange={updateFirstName}
                  />
                  <input
                    type="text"
                    placeholder="Lastname *"
                    onChange={updateLastName}
                  />
                </div>
                <div className="input-row">
                  <input
                    className="one"
                    type="text"
                    placeholder="Address *"
                    onChange={updateAddress}
                  />
                  <input
                    type="text"
                    placeholder="Street number *"
                    onChange={updateStreetNumber}
                  />
                </div>
                <div className="input-row">
                  <input
                    type="text"
                    placeholder="Postal Code 5 digits*"
                    onChange={updatePostalCode}
                  />
                  <input
                    type="text"
                    placeholder="City *"
                    onChange={updateCity}
                  />
                </div>
              </div>

              <input
                style={{ width: 200, margin: 10 }}
                type="number"
                placeholder="Credit card number 16 digits *"
                onChange={updateCreditCard}
              />
              <input
                type="number"
                placeholder="CVC 3 digits*"
                onChange={updateCvc}
              />
            </div>
            <div></div>
          </div>
          <button
            onClick={handleCardSubmit}
            style={{ width: 100 }}
            className="black-text"
          >
            Pay
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="checkout-container">
        <div className="checkout-section">
          <div className="radio-container">
            <div className="radio-item">
              <label className="black-text">Choose Payment</label>
              <div className="input-row">
                <label className="radio-label black-text" htmlFor="Card">
                  <input
                    value="true"
                    name="Payment"
                    type="radio"
                    checked={isChosenCreditCard} // Updated attribute
                    onChange={handlePaymentSelection}
                  />
                  Card
                </label>
                <label className="radio-label black-text" htmlFor="Swish">
                  <input
                    value="false"
                    name="Payment"
                    type="radio"
                    onChange={handlePaymentSelection}
                  />
                  Swish
                </label>
              </div>
            </div>
          </div>
          <div className="checkout-item">
            <div className="input-container">
              <img className="paymentIcon" src={swish} alt="Swish" />
              <div className="input-group ">
                <h3 style={{ color: "red" }}>{errorMessage}</h3>
                <div style={{ display: "flex" }} className="input-row">
                  <input
                    style={{ justifyContent: "center" }}
                    type="number"
                    placeholder="Mobile number *"
                    onChange={updateMobileNumber}
                  />
                </div>
                <button
                  onClick={handleSwishSubmit}
                  style={{ width: 100 }}
                  className="black-text"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CheckOutCard;
