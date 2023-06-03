import React, { useState } from "react";
import logogold from "../images/logogold.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex-container centered-container">
      <div>
        <img style={{ maxHeight: 200 }} src={logogold} />
      </div>
      <h1 style={{ margin: 0 }} className="gold-text">
        Welcome to BunDrop: Where Burgers Take Flight!
      </h1>
      <div className="info-container">
        <h2 style={{ margin: 0 }} className="gold-text">
          Where we always drop 'em like it's hot
        </h2>
        <h2>
          At Bun Drop, we've taken burger delivery to new heights – quite
          literally! We're thrilled to introduce our innovative drone delivery
          service, bringing you mouthwatering burgers straight from our kitchen
          to your doorstep. With Bun Drop, your hunger will be satisfied with a
          touch of technological magic.
        </h2>
      </div>
    </div>
  );
}

export default Home;
