import React from "react";
import Cart from "./cart";

const Header = () => {
  return (
    <header classNameName="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="./fruit.png" alt="logo" className="w-20" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <div className="nav-link">
                Home <span className="sr-only"></span>
              </div>
            </li>
          </ul>
          <div>
            <Cart />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
