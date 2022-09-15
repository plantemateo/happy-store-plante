import { React, useContext, useState, useCallback} from "react";
import { Link } from "react-router-dom";
import { CarritoStoreContext } from "../context/CarritoStoreContext";
import { CountItemContext } from "../context/CountItemContext";
import Store from "./Store";

const Carrito = () => {
  const {carritoProducts, addItemCarrito, removeItemCarrito} = useContext(CarritoStoreContext);
  const {countItem, addCountItem} = useContext(CountItemContext);
  const [totalPesos, setTotalPesos] = useState(0);
  const [totalDolares, setTotalDolares] = useState(0);

  if(carritoProducts.length > 0 && totalPesos === 0 && totalDolares === 0) {
    let contadorPesos = 0;
    let contadorDolares = 0;
    carritoProducts.map(prod => {
      if(prod.divisa === "ARS"){
        contadorPesos = contadorPesos + (prod.precio * prod.cantidad);
      }else if(prod.divisa === "USD"){
        contadorDolares = contadorDolares + (prod.precio * prod.cantidad);
      }
    })
    setTotalPesos(contadorPesos);
    setTotalDolares(contadorDolares);
  }

  if(carritoProducts.length === 0 && countItem > 0){
    addCountItem(countItem - countItem);
  }

  return (
    <>
      <Store></Store>
      <div className="modalCarrito">
        <div className="containerButton" style={{left: "97%"}}><Link style={{ textDecoration: "none", color: "#F8F7FF" }} to={'/tienda'}><button type="button" style={{ width: '0.6em', height: '0.6em', color: 'black' }} className="btn-close" data-bs-dismiss="alert" /></Link></div>
        <div className="tittleDetalle" style={{fontSize: "25px"}}>Tu Carrito</div>
        <div className="containerProductsCarrito">
          { carritoProducts.length > 0 ?
            carritoProducts.map(prod => 
              <div className="containerProdCarrito" key={prod.header}>
                  <div className="imgProdCarrito" style={{backgroundImage: `url('../img/${prod.img}')`}}></div>
                <div style={{width: "150px", textAlign: "center"}}>    
                  {prod.tittle}
                </div>
                <div style={{width: "100px", textAlign: "center"}}>
                  {prod.divisa}
                  &nbsp;&nbsp;
                  {prod.precio}
                </div>
                <div>
                  <button className="buttonsCantidad" onClick={() => {prod.cantidad = prod.cantidad - 1;removeItemCarrito(prod);addCountItem(countItem - 1);setTotalPesos(0);setTotalDolares(0)}}>-</button>
                  <label className="labelCantidad">{prod.cantidad}</label>
                  <button className="buttonsCantidad" onClick={() => {prod.cantidad = prod.cantidad + 1;addItemCarrito(prod);addCountItem(countItem + 1);setTotalPesos(0);setTotalDolares(0)}}>+</button>
                </div>
                <div>
                  <label>{prod.stock} disponibles</label>
                </div>
                <div>
                  <button className="buttonCard" onClick={() => {prod.cantidad = 0;removeItemCarrito(prod);addCountItem(countItem - 1);setTotalPesos(0);setTotalDolares(0)}}>Eliminar</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="buttonCard">Comprar Ahora</button>
                </div>
              </div>
            )
            :
            <div className="carritoVacio">
              <label>Tu carrito está vacío</label>
              <label>¿No sabés qué comprar? ¡Miles de productos te esperan!</label>
              <div className="buttonTiendaCarrito"><Link style={{ textDecoration: "none", color: "#0f0066f7" }} to={'/tienda'}>Ir a la tienda</Link></div>
            </div>
          }
          { carritoProducts.length > 0 ?
            <div className="containerTotals">
              <div>
                <button className="buttonCard" style={{marginBottom: "unset"}}>Comprar</button>
              </div>
              <div>
                <div>
                  Total Pesos:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${totalPesos.toFixed(3)}
                </div>
                <div>
                  Total Dolares:&nbsp;&nbsp;${totalDolares.toFixed(2)}
                </div>
              </div>
            </div>
            : 
            undefined
          }
        </div>
      </div>
    </>
  )
}

export default Carrito;