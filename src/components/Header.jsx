import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header>
      <h2 className="header-h">Devmountain Eatery</h2>
      <nav>
        <Link to='/'>
          <button className="header-btn">Home</button>
        </Link>
        <Link to='/recipe'>
          <button className="header-btn">Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
