import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  function CreateLinks() {
    return (
      links.map((link) => <a key={link} href={'#'+link}>{link}</a>
    ))
  }

  return <nav>{ CreateLinks() }</nav>;
}

export default NavBar;
