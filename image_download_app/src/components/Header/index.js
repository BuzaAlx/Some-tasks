import React from "react";
import "./index.css";

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <nav className="navigation row">
          <a className="navigation__logo col-md-2 d-flex" href="#">
            <img
              className="w-25 align-self-center"
              src="https://icons-for-free.com/iconfiles/png/512/camera+digital+image+photo+photography+picture+icon-1320085878894858288.png"
              alt="main-header__logo"
            />
          </a>

          <ul className="navigation__list list-group list-group-horizontal col-md-8 ">
            <li className="list-group-item border-0">Home</li>
            <li className="list-group-item border-0">Photos</li>
            <li className="list-group-item border-0">About</li>
          </ul>
          <ul className="navigation__list list-group list-group-horizontal justify-content-end col-md-2">
            <li className="list-group-item border-0">Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
