import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/component/navbar.scss";
// icons
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [isOpenInput, setIsOpenInput] = useState(false);

  return (
    <nav className={isOpenInput ? "navbar__openInput_active" : "navbar"}>
      <div className="nav__logo">
        <Link>
          <img
            src="	https://kun.uz/assets/cd6ab492/img/kun-uz-logo.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="nav__menu">
        <h2>O'ZBEKISTON</h2>
        <h2>JAHON</h2>
        <h2>SPORT</h2>
      </div>
      <div className="nav__searchbox">
        <select name="">
          <option value="uzb">O'zbekcha</option>
          <option value="rus">Russia</option>
          <option value="eng">English</option>
        </select>
        <div className="search-box">
          <BiSearch className="icon-active" />
          <input type="text" placeholder="search....." />
        </div>

        {isOpenInput ? (
          <p
            className="search-icon_active"
            onClick={() => setIsOpenInput(!isOpenInput)}
          >
            x
          </p>
        ) : (
          <BiSearch
            className="search-icon"
            onClick={() => setIsOpenInput(!isOpenInput)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
