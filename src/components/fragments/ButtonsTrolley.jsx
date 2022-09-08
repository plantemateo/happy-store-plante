import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CountItemContext } from "../../context/CountItemContext";
import { ProductosServices } from "../../services/ProductosService";
import Alert from "./Alert";

const ButtonsTrolley = ({ idProduct }) => {
    const [cantidad, setCantidad] = useState(1);
    const {countItem, addCountItem} = useContext(CountItemContext);
    const [dataAlert, setDataAlert] = useState({ text: 'Se ha anadido al carrito!', state: false, color: 'rgba(67, 206, 42, 0.98)' });

    const addItem = (id) => {
        ProductosServices.getAllProducts.then(products => {
            products.forEach(product => {
                if (id === product.id) {
                    if (product.stock > 0 && product.stock >= cantidad) {
                        product.stock = product.stock - cantidad;
                        product.cantidad = product.cantidad + cantidad;
                        incrementCountItem(true);
                    } else {
                        setCantidad(1);
                        setDataAlert({ text: 'No hay mas stock para este producto, disculpe las molestias.', state: true, color: '#32a881' });
                    }
                }
            });
        })
    }

    const removeItem = (id) => {
        ProductosServices.getAllProducts.then(products => {
            products.forEach(product => {
                if (id === product.id && product.cantidad > 0) {
                    product.stock = product.stock + cantidad;
                    product.cantidad = product.cantidad - cantidad;
                    incrementCountItem(false);
                } else if (id === product.id && product.cantidad === 0) {
                    setDataAlert({ text: undefined, state: false, color: undefined });
                }
            });
        })
    }

    const incrementCountItem = (isIncrement) => {
        if (isIncrement) {
            setCantidad(cantidad);
            addCountItem(countItem + cantidad);
            setDataAlert({ text: 'Se ha anadido al carrito!', state: true, color: 'rgba(67, 206, 42, 0.98)' });
        } else {
            setCantidad(1);
            addCountItem(countItem - cantidad);
            setDataAlert({ text: 'Se ha eliminado del carrito.', state: true, color: '#de3131f7' });
        }
    }

    const incrementCantidad = (isIncrement) => {
        if(isIncrement){
            setCantidad(cantidad + 1);
        }else if(cantidad > 1){
            setCantidad(cantidad - 1);
        }
    }

    const closeAlert = () => {
        setDataAlert({ text: undefined, state: false, color: undefined });
    }

    return (
        <>  
            <div style={{ display: dataAlert.state ? "flex" : "none" }}>
                <Alert alertData={dataAlert} closeAlert={closeAlert}></Alert>
            </div>
            <div className="containerButtonsCantidad">
                <div><button className="buttonsCantidad" onClick={() => { incrementCantidad(true) }}>+</button></div>
                <div className="countItemButtons">
                    <label>Cant.&nbsp;{cantidad}</label>
                </div>
                <div><button className="buttonsCantidad" onClick={() => { incrementCantidad(false) }}>-</button></div>
            </div>
            <div className="containerButtonsCard">
                <button className="buttonCard" onClick={() => addItem(idProduct)}>ANADIR AL CARRITO</button>
                <button className="buttonCard" onClick={() => removeItem(idProduct)}>REMOVER DEL CARRITO</button>
                <button className="buttonCard2"><Link style={{textDecoration: "none", color: "black"}} to={`/detalle-producto/${idProduct}`}>VER MAS INFORMACION</Link></button>
            </div>

        </>
    )
}

export default ButtonsTrolley;