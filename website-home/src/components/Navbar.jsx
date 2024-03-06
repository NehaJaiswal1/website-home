

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a href="#about">About</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#sponsors">Sponsors</a>
      <a href="#events">Past Events</a>
      <a href="#contact">Contact</a>

      <a href="javascript:void(0);" className="icon" onClick={() => myFunc()}>
        <FontAwesomeIcon icon={faBriefcase} />
      </a>
      <div className="nav-div">
        <button >LOGIN</button>
        <button>REGISTER</button>
      </div>
    </div>
  );
};

export default Navbar;
