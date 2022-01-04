import React, { Component, Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "gatsby"
import"./nav.css"

class Menu extends React.Component {  
  render() {
    return (
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <a>Home</a>
          </li>
          <li
            className="nav__menu-item"
          >
            <a>About</a>
            <Submenu />
          </li>
          <li
            className="nav__menu-item"
          >
            <a>About</a>
            <Submenu />
          </li>
          <li className="nav__menu-item">
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

class Submenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Our Company</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Our Team</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Our Portfolio</a>
        </li>
      </ul>
    )
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById("menu-container")
);