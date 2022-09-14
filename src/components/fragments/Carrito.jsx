import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoStoreContext } from "../../context/CarritoStoreContext";
import Store from "../Store";

const Carrito = () => {
  const {carritoProducts, addItemCarrito, removeItemCarrito} = useContext(CarritoStoreContext);

  return (
    <>
      <Store></Store>
      <div className="modalCarrito">
        <div className="containerButton"><Link style={{ textDecoration: "none", color: "#F8F7FF" }} to={'/tienda'}><button type="button" style={{ width: '0.6em', height: '0.6em', color: 'black' }} className="btn-close" data-bs-dismiss="alert" /></Link></div>
        <div className="tittleDetalle">Tu Carrito</div>
        {
          carritoProducts.map(prod => 
            <div>    
              {prod.tittle}
            </div>
          )
        }
      </div>
    </>
  )
}

export default Carrito;