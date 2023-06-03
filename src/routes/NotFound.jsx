import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

function NotFound() {
  return (
    <div>
      <FontAwesomeIcon icon={faBurger} flip size="2xl" />
      <div className="display-flex">
        <h1 style={{ fontSize: 60 }}>Page not found...</h1>

        <Link to="/home">
          <h2 className="gold-text">Go back to Home</h2>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
