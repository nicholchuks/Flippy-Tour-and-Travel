import { Component } from "react";
import { MenuItems } from "../MenuItem";
import "./NavbarStyle.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <ul className="nav-menu">
          <li>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>
                    <i className={item.icon}></i>{item.title}
                  </a>
                </li>
              );
            })}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
