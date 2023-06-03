import React, { useEffect, useState } from "react";
import { ApiHelper } from "../services/ApiHelper";
import CartItem from "../components/CartItem";
import { LocalStorageManager } from "../services/LocalStorageManager";
import { Link } from "react-router-dom";

function Cart() {
  let productsInCart = localStorage.getItem("orderList");
  productsInCart = JSON.parse(productsInCart);
  const [totalCost, setTotalCost] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = [];
        let cost = 0;
        for (const product of productsInCart) {
          const data = await ApiHelper.getBurger(product.id);
          const itemWithAmount = {
            ...data,
            amount: product.amount,
          };
          items.push(itemWithAmount);
          cost += product.amount * data.price;
        }
        setTotalCost(cost);
        setItemsInCart(items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function removeFromCart(itemId) {
    LocalStorageManager.removeFromLocalStorage(itemId);
    const updatedCart = itemsInCart.filter((item) => item.id !== itemId);
    setItemsInCart(updatedCart);

    let newTotalCost = 0;
    for (const item of updatedCart) {
      newTotalCost += item.amount * item.price;
    }
    setTotalCost(newTotalCost);
  }

  if (productsInCart && productsInCart.length > 0) {
    return (
      <div className="item-container">
        {itemsInCart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
        <div>
          <div className="gold-text item">
            <h2>Total: {totalCost.toString()} :-</h2>
            <button className="btn">
              <Link
                to={{
                  pathname: "/checkout",
                }}
              >
                Purchase
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="item">Cart is empty...</h1>
      </div>
    );
  }
}

export default Cart;
