import React, { useState, useEffect } from "react";
import { ApiHelper } from "../services/ApiHelper";
import BurgerCard from "../components/BurgerCard";
import { Link } from "react-router-dom";
function Menu() {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    ApiHelper.getBurgers().then((data) => setBurgers(data));
  }, []);

  return (
    <div className="centered-container">
      <h1 style={{ fontSize: 60 }}>Burgers</h1>
      <div className="flex-container">
        <div className="grid-container">
          {burgers?.map((b) => (
            <Link key={b.id} to={`/burger/${b.id}`}>
              <BurgerCard burger={b} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
