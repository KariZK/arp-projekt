import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img
          className="logo"
          data-src="https://rockinit.pl/wp-content/uploads/2023/02/Logo_poziom_kolor.svg"
          src="https://rockinit.pl/wp-content/uploads/2023/02/Logo_poziom_kolor.svg"
        />
      </div>
    </header>
  );
};

export default Header;
