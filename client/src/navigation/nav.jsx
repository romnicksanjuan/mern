import React from "react";
import {Link} from 'react-router-dom'
import nav from '../css/navBar.module.css'

const NavBar = () => {
return(
  <nav className={nav.navbar}>
  <ul>
    <li className={nav.list}><Link to="/">Home</Link></li>
    <li className={nav.list}><Link to="/about">About</Link></li>
    <li className={nav.list}><Link to="/contact">Contact</Link></li>
    {/* Add more navigation links as needed */}
  </ul>
</nav>
)
}

export default NavBar