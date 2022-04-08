import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

import "./style.scss";

export function Header() {
  return (
    <header id="main-header">
      <nav>
        <img src={Logo} alt="squid" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/metrics">Metrics</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
