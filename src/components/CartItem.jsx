import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CartItem({ item, removeFromCart }) {
  return (
    <div className="item" key={item.id}>
      <h1>
        {item.name}
        <span onClick={() => removeFromCart(item.id)} className="delete-icon">
          <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
        </span>
      </h1>
      <h3>
        {item.amount} pcs x {item.price}:-
      </h3>
    </div>
  );
}

export default CartItem;
