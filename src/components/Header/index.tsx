import React from "react";

import Logo from "../../assets/logo.svg";

import "./style.scss";

export function Header() {
  return (
    <header id="main-header">
      <nav>
        <img src={Logo} alt="squid" />
      </nav>
    </header>
  );
}
