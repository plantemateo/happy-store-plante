import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarritoStoreContext } from "../context/CarritoStoreContext";
import { CountItemContext } from "../context/CountItemContext";
import { SpinnerContext } from "../context/SpinnerContext";
import { DivisasServices } from "../services/DivisasService";
import Store from "./Store";

const Carrito = () => {
  const {changeState} = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {carritoProducts, addItemCarrito, removeItemCarrito, setPaymentData} = useContext(CarritoStoreContext);
  const {countItem, addCountItem} = useContext(CountItemContext);
  const [totalPesos, setTotalPesos] = useState(0);
  const [totalDolares, setTotalDolares] = useState(0);

  const updateItemCarrito = async (prod, action) => {
    changeState(true);
    if(action === "DEL"){
      prod.cantidad = 0;
      await removeItemCarrito(prod);
      addCountItem(countItem - 1);
    }else if(action === "ADD"){
      prod.cantidad = prod.cantidad + 1;
      await addItemCarrito(prod);
      addCountItem(countItem + 1);
    }else if(action === "REM"){
      prod.cantidad = prod.cantidad - 1;
      await removeItemCarrito(prod);
      addCountItem(countItem - 1);
    }
      
    setTotalPesos(0);
    setTotalDolares(0);
    changeState(false);
  }
  
  const calculateMontoPagarGoCompras = async () => {
    if(carritoProducts.length > 0){
      let dolarBluePrice = undefined;
      changeState(true);
      await DivisasServices.getDolarValues().then(data => {
        dolarBluePrice = data.blue;
      }).finally(() => {
        changeState(false);
      });

      let amountPay = ((totalDolares * dolarBluePrice) + totalPesos);
      const paymentData = { montoPagar: amountPay };
      setPaymentData(paymentData);
      navigate('/compras');
    }
  }

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
                  {prod.precio.toLocaleString()}
                </div>
                <div>
                  <button className="buttonsCantidad" onClick={() => {updateItemCarrito(prod, "REM")}}>-</button>
                  <label className="labelCantidad">{prod.cantidad}</label>
                  <button className="buttonsCantidad" onClick={() => {updateItemCarrito(prod, "ADD")}}>+</button>
                </div>
                <div>
                  <label>{prod.stock} disponibles</label>
                </div>
                <div>
                  <button className="buttonCard" onClick={() => {updateItemCarrito(prod, "DEL")}}>Eliminar</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="buttonCard" onClick={() => {calculateMontoPagarGoCompras()}}>Comprar Ahora</button>
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
        </div>
        { carritoProducts.length > 0 ?
            <div className="containerTotals">
              <div>
                <button className="buttonCard" style={{marginBottom: "unset"}} onClick={() => {calculateMontoPagarGoCompras()}}>Comprar</button>
              </div>
              <div>
                <div>
                  Total Pesos:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${totalPesos.toLocaleString()}
                </div>
                <div>
                  Total Dolares:&nbsp;&nbsp;${totalDolares.toLocaleString()}
                </div>
              </div>
            </div>
            : 
            undefined
        }
      </div>
    </>
  )
}

export default Carrito;