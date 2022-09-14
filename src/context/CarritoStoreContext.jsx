import { React, createContext, useState } from "react";

const CarritoStoreContext = createContext();

const CarritoStoreProvider = (props) => {
    const [carritoProducts, setCarritoProducts] = useState([]);

    const addItemCarrito = (producto) => {
        let productosCarrito = carritoProducts;
        productosCarrito.push(producto);
        setCarritoProducts(productosCarrito);
    }

    const removeItemCarrito = (producto) => {
        let productosCarrito = carritoProducts;
        for(let i = 0; i < productosCarrito.length; i++){
            if(productosCarrito[i].id === producto.id){
                delete productosCarrito[i];
            }
        }
        setCarritoProducts(productosCarrito);
    }

    return (
        <>
            <CarritoStoreContext.Provider value={{carritoProducts, addItemCarrito, removeItemCarrito}}>
                {props.children}
            </CarritoStoreContext.Provider>
        </>
    )
  }

export {CarritoStoreContext, CarritoStoreProvider};