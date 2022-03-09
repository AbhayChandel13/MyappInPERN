import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineHome} from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">
            Student Data App
            <FaApple />
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2 justify-content-end">
            <ul className="navbar-nav  mr-auto">
              <li className="nav-item ">
                <NavLink className="nav-link active" to="/">
                  Home <AiOutlineHome />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/add">
                  Add <AiOutlineUserAdd />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">
                  About 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
