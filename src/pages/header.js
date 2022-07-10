import React from "react";
import Cart from "./Cart";

const Header = () => {
  return (
    <header classNameName="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="./fruit.png" alt="logo" className="w-20" />
        <div className=" navbar-collapse">
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
