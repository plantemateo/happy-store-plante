//NavBar component UI
import React from "react";
import SearchBar from "./fragments/SearchBar";

const NavBar = () => {
  return (
    <nav className="navbarStyle">
      <div className="containerGeneral">
        <a className="nameApp">HAPPY STORE</a>
        <div className="containerGeneral2">
          <div className="containerButtons">
            <button className="buttonsNav">HOME</button>
            <button className="buttonsNav">STORE</button>
            <button className="buttonsNav">ACERCA</button>
          </div>
          <div className="searchBar">
            <SearchBar contToSearch={"Buscar en HAPPY STORE."}></SearchBar>
          </div>
          <div className="carrito"></div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;