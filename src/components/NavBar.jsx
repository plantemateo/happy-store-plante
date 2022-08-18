//NavBar component UI
import React from "react";
import DropMenu from "./fragments/DropMenu";
import SearchBar from "./fragments/SearchBar";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Happy Store</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Acerca</a>
            </li>
            <DropMenu></DropMenu>
          </ul>
          <div className="searchBar">
            <SearchBar contToSearch={"Buscar Productos"}></SearchBar>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;