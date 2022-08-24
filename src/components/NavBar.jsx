//NavBar component UI
import { React, useState } from "react";
import Carrito from "./fragments/Carrito";
import SearchBar from "./fragments/SearchBar";

const NavBar = ({countItem}) => {

  return (
    <div>
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
              <Carrito countItem={countItem}></Carrito>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;