import React from 'react'
import {NavLink} from "react-router-dom"

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="container">
      <div className="navbar-brand">
        Devel Web
      </div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to={"/"} exact>Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/about"}>Информация</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
