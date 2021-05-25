import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <header>
      <nav>
        <h1>Manga Reader Clone!</h1>

        <menu>
          <ul className="link-menu">
            <li>
              <a href="#">Directory</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Updates</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
          </ul>
        </menu>

        <div className="utility">
          <button className="nightmode icon"></button>

          <div className="user-ava">M</div>

          <button className="search icon"></button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
