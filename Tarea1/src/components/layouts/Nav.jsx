import React from "react";
import '../../App.css';


// rfcp // rafc
const navItems = [
  {
    title: "Home",
    link: "/Home",
  },
  {
    title: "About",
    link: "/About",
  },
  {
    title: "Contact",
    link: "/Contact",
  }
];

const Nav = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        {navItems.map((nav, index) => (
          <li key={nav.title + index} className="nav-item">
            <a href={nav.link} className="nav-link">{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
    
  );
};

export default Nav;