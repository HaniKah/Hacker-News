import React from "react";
import "./Navbar.css";
import logo from "./y18.gif";
export default function Navbar(props) {
  return (
    <header>
      <div>
        <nav className="navi">
          <img src={logo} />
          <a href="">
            <strong>Hacker News </strong>
          </a>

          <a href=""> new | </a>
          <a href=""> past | </a>
          <a href=""> comments | </a>
          <a href=""> ask | </a>
          <a href=""> show |</a>
          <a href=""> jobs |</a>
          <a href=""> submit |</a>
          <a href=""> login </a>
        </nav>
      </div>
    </header>
  );
}
