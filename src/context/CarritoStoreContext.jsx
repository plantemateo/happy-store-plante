import { React, createContext, useState } from "react";
import { addNewOrdenCarrito, saveProduct } from "../services/Firebase";

const CarritoStoreContext = createContext();

const CarritoStoreProvider = (props) => {
    const [carritoProducts, setCarritoProducts] = useState([]);

    const addItemCarrito = async (producto) => {
        await saveProduct(producto);

        let existProduct = false;
        let productosCarrito = carritoProducts;
        productosCarrito.map(prod => {
            if(prod.id === producto.id){
                existProduct = true;
                prod = producto;
            }
        })
        if(!existProduct){
            productosCarrito.push(producto);
        }
        setCarritoProducts(productosCarrito);
        
        const ordenCarrito = { id: "orden1", data: carritoProducts };
        await addNewOrdenCarrito(ordenCarrito);
    }

    const removeItemCarrito = async (producto) => {
        await saveProduct(producto);

        let productosCarrito = carritoProducts;
        if(producto.cantidad === 0){
            setCarritoProducts(productosCarrito.filter(prod => prod.id !== producto.id));
        }else{
            productosCarrito.map(prod => {
                if(prod.id === producto.id){
                    prod = producto;
                }
            })
            setCarritoProducts(productosCarrito);
        }
        
        const ordenCarrito = { id: "orden1", data: carritoProducts };
        await addNewOrdenCarrito(ordenCarrito);
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