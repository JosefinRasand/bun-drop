import React from "react";
import burger1 from "../images/burger1.png";
import burger2 from "../images/burger2.png";
import burger3 from "../images/burger3.png";
import burger4 from "../images/burger4.png";
import burger5 from "../images/burger5.png";
import burger6 from "../images/burger6.png";
import burger7 from "../images/burger7.png";
import burger8 from "../images/burger8.png";
import burger9 from "../images/burger9.png";

function BurgerCard({ burger }) {
  if (burger.isVegetarian) {
    return (
      <div
        className="flip-card"
        style={{ backgroundColor: "rgb(84, 228, 84, 0.2)" }}
      >
        <div
          className="flip-card-inner"
          style={{ backgroundImage: `url(${getImagePath(burger.image)})` }}
        >
          <div className="flip-card-back">
            <h1 className="black-text">{burger.name}</h1>
            <p style={{ fontSize: 56 }} className="gold-text">
              {burger.price}:-
            </p>
            <em style={{ fontSize: 40 }} className="black-text">
              Vegetarian
            </em>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flip-card">
        {burger.is}
        <div
          className="flip-card-inner"
          style={{ backgroundImage: `url(${getImagePath(burger.image)})` }}
        >
          <div className="flip-card-back">
            <h1 className="black-text">{burger.name}</h1>
            <p style={{ fontSize: 56 }} className="gold-text">
              {burger.price}:-
            </p>
            <em style={{ fontSize: 40 }} className="black-text">
              Meat
            </em>
          </div>
        </div>
      </div>
    );
  }

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
export default BurgerCard;
