import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../images/burger1.png";
import burger2 from "../images/burger2.png";
import burger3 from "../images/burger3.png";
import burger4 from "../images/burger4.png";
import burger5 from "../images/burger5.png";
import burger6 from "../images/burger6.png";
import burger7 from "../images/burger7.png";
import burger8 from "../images/burger8.png";
import burger9 from "../images/burger9.png";
import { LocalStorageManager } from "../services/LocalStorageManager";

function BurgerItem({ burger }) {
  const amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedAmount, setSelectedAmount] = useState(0);

  function handleClick() {
    LocalStorageManager.addToLocalStorage(burger.id, selectedAmount);
  }
  return (
    <div className="split-container">
      <div
        className="firstItem"
        style={{ backgroundImage: `url("${getImagePath(burger.image)}")` }}
      ></div>
      <div className="second-item">
        <h1 style={{ fontSize: 50 }} className="gold-text">
          {burger.name}
        </h1>
        <div>
          <p style={{ fontSize: 20 }} className=" white-text">
            {burger.description}
          </p>
          <p style={{ fontSize: 30 }} className="white-text">
            {burger.price}:-
          </p>
          <select
            id="select"
            value={selectedAmount}
            //sätter valt value till var selectedAmount
            onChange={(event) => setSelectedAmount(event.target.value)}
            style={{ fontSize: 15 }}
            className="black-text"
          >
            <option style={{ fontSize: 15 }} className="black-text" value="">
              Select amount
            </option>
            {amount.map((a) => (
              <option
                key={a}
                style={{ fontSize: 15 }}
                className="black-text"
                value={a}
              >
                {a}
              </option>
            ))}
          </select>
          <Link to={"/menu"}>
            <button
              onClick={handleClick}
              style={{ margin: 10 }}
              className="black-text"
            >
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  function getImagePath(burgerName) {
    switch (burgerName) {
      case "burger1.png":
        return burger1;
      case "burger2.png":
        return burger2;
      case "burger3.png":
        return burger3;
      case "burger4.png":
        return burger4;
      case "burger5.png":
        return burger5;
      case "burger6.png":
        return burger6;
      case "burger7.png":
        return burger7;
      case "burger8.png":
        return burger8;
      case "burger9.png":
        return burger9;
      default:
        return "";
    }
  }
}

export default BurgerItem;
