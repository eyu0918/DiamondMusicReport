import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            DIAMOND MUSIC REPORT <i class="fa-solid fa-compact-disc"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/search"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                SEARCH
              </Link>
            </li>
          </ul>
          {button && (
            <Link to="/search">
              <Button buttonStyle="btn--outline">SEARCH</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
