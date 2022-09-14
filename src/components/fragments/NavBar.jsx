//NavBar component UI
import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = ({countItem}) => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbarStyle">
        <div className="containerGeneral">
          <a className="nameApp">HAPPY STORE</a>
          <div className="containerGeneral2">
            <div className="containerButtons">
              <button className="buttonsNav"><Link style={{textDecoration: "none", color: "#F8F7FF"}} to={'/'}>HOME</Link></button>
              <button className="buttonsNav"><Link style={{textDecoration: "none", color: "#F8F7FF"}} to={'/tienda'}>STORE</Link></button>
              <button className="buttonsNav">ACERCA</button>
            </div>
            <div className="searchBar">
              <SearchBar contToSearch={"Buscar en HAPPY STORE."}></SearchBar>
            </div>
              <div className="countItems">{countItem ? countItem : 0}</div>
              <div className="carrito" onClick={() => {navigate('/carrito')}}></div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;