import { React, useEffect, useState, useContext }  from "react";
import { Link } from "react-router-dom";
import { SpinnerContext } from "../../context/SpinnerContext";
import { getCompraById } from "../../services/Firebase";

const UltimaCompra = () => {
    const [lastCompra, setLastCompra] = useState({data: undefined});
    const {changeState} = useContext(SpinnerContext);

    useEffect(() => {
        if(lastCompra.data === undefined){
            changeState(true);
            getCompraById("compra1").then(orden => {
                let lastOrden = orden.data();
                if(lastOrden === undefined){
                    lastOrden = {
                        data: []
                    }
                }
                setLastCompra(lastOrden);
            }).finally(() => {
                changeState(false);
            })
        }
    })

    return(
        <>  
            <div className="containerComprasTittle">Mis Adquisiciones</div>
            <div className="containerProductMisCompras">
            {
                lastCompra.data !== undefined && lastCompra.data.length > 0 ?
                    lastCompra.data.map(prod =>
                        <div className="containerProdCarrito" key={prod.id} style={{marginInline: "auto"}}>
                            <div className="imgProdCarrito" style={{backgroundImage: `url('../../img/${prod.img}')`}}></div>
                            <div style={{width: "150px", textAlign: "center"}}>    
                                {prod.tittle}
                            </div>
                            <div style={{width: "100px", textAlign: "center"}}>
                                {prod.divisa}
                                &nbsp;&nbsp;
                                {prod.precio.toLocaleString()}
                            </div>
                            <div>
                                <label>{prod.cantidad} Total</label>
                            </div>
                            <div>
                                <Link style={{ textDecoration: "none", color: "#0f0066f7" }} to={`/detalle-producto/${prod.id}`}>Ver Detalle</Link>
                            </div>
                            <div>
                                <label style={{marginRight: "5px"}}>Adquirido</label>
                                <img src={"../../img/check.png"} width="40px" alt="Cargando..."></img>
                            </div>
                        </div>
                    )
                :
                <div className="containerMisComprasEmpty">
                    <div className="carritoVacio">
                        <label>Aun no posee compras</label>
                        <label>¿No sabés qué comprar? ¡Miles de productos te esperan!</label>
                        <div className="buttonTiendaCarrito" style={{background: "#0f0066f7"}}><Link style={{ textDecoration: "none", color: "#F7F8FF" }} to={'/tienda'}>Ir a la tienda</Link></div>
                    </div>
                </div>
            }
            </div>
        </>
    )
}

export default UltimaCompra;