import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiHelper } from "../services/ApiHelper";
import BurgerItem from "../components/BurgerItem";

function Burger() {
  const { burgerId } = useParams();
  const [burger, setBurger] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiHelper.getBurger(burgerId);
        setBurger(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [burgerId]);

  return (
    <div className="split-container">
      <BurgerItem key={burger.id} burger={burger} />
    </div>
  );
}

export default Burger;
